import { canPersistNonEssentialPreferences } from './consent';
import {
  LANGUAGE_STORAGE_KEY,
  readLocalStorage,
  removeLocalStorage,
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
  writeLocalStorage
} from './safeLocalStorage';

export const getInitialThemePreference = () => (
  canPersistNonEssentialPreferences() && readLocalStorage(THEME_STORAGE_KEY) === THEME_DARK
);

export const syncThemePreference = (isDarkMode) => {
  if (canPersistNonEssentialPreferences()) {
    writeLocalStorage(THEME_STORAGE_KEY, isDarkMode ? THEME_DARK : THEME_LIGHT);
    return;
  }

  removeLocalStorage(THEME_STORAGE_KEY);
};

export const syncLanguagePreference = (language, supportedLanguages = []) => {
  if (!supportedLanguages.includes(language)) return;

  if (canPersistNonEssentialPreferences()) {
    writeLocalStorage(LANGUAGE_STORAGE_KEY, language);
    return;
  }

  removeLocalStorage(LANGUAGE_STORAGE_KEY);
};
