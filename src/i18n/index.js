import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  canPersistNonEssentialPreferences,
  onConsentStateChange
} from '../lib/consent';
import {
  removeLocalStorage,
  writeLocalStorage
} from '../lib/safeLocalStorage';

import es from './locales/es.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es
      },
      en: {
        translation: en
      }
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    
    detection: {
      order: canPersistNonEssentialPreferences()
        ? ['localStorage', 'navigator', 'htmlTag']
        : ['navigator', 'htmlTag'],
      caches: [],
    },

    interpolation: {
      escapeValue: false
    }
  });

const syncLanguageStorage = (lng) => {
  if (!['es', 'en'].includes(lng)) return;
  if (canPersistNonEssentialPreferences()) {
    writeLocalStorage('i18nextLng', lng);
    return;
  }

  removeLocalStorage('i18nextLng');
};

i18n.on('languageChanged', syncLanguageStorage);

const registerConsentSyncListener = () => {
  if (typeof window === 'undefined') return;
  if (window.__cvConsentSyncCleanup) {
    window.__cvConsentSyncCleanup();
  }

  window.__cvConsentSyncCleanup = onConsentStateChange(() => {
    syncLanguageStorage(i18n.language);
  });
};

registerConsentSyncListener();

if (typeof window !== 'undefined') {
  syncLanguageStorage(i18n.language);
}

export default i18n;
