import {
  LANGUAGE_STORAGE_KEY,
  readLocalStorage,
  readLocalStorageJSON,
  removeLocalStorage,
  THEME_STORAGE_KEY,
  writeLocalStorage
} from './safeLocalStorage';

export const CONSENT_STATES = {
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  CONFIGURED: 'configured',
  UNKNOWN: 'unknown'
};

export const DEFAULT_COOKIE_SETTINGS = {
  essential: true,
  preferences: false,
  analytics: false
};

const CONSENT_KEY = 'cookieConsent';
const SETTINGS_KEY = 'cookieSettings';
const CONSENT_EVENT = 'cookieConsentChanged';

const isBrowser = () => typeof window !== 'undefined';

const isCookieSettingsShape = (value) => (
  Boolean(value)
  && typeof value === 'object'
  && !Array.isArray(value)
  && typeof value.essential === 'boolean'
  && typeof value.preferences === 'boolean'
  && typeof value.analytics === 'boolean'
);

const normalizeCookieSettings = (value) => ({
  ...DEFAULT_COOKIE_SETTINGS,
  ...(isCookieSettingsShape(value) ? value : {})
});

export const clearNonEssentialPreferences = () => {
  removeLocalStorage(LANGUAGE_STORAGE_KEY);
  removeLocalStorage(THEME_STORAGE_KEY);
  if (isBrowser()) {
    document.cookie = 'sidebar_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
};

export const getConsentState = () => {
  const value = readLocalStorage(CONSENT_KEY);
  if (Object.values(CONSENT_STATES).includes(value)) {
    return value;
  }
  return CONSENT_STATES.UNKNOWN;
};

export const getCookieSettings = () => {
  const parsed = readLocalStorageJSON(SETTINGS_KEY);
  if (!parsed) return null;
  return normalizeCookieSettings(parsed);
};

export const canPersistNonEssentialPreferences = () => {
  const consentState = getConsentState();

  if (consentState === CONSENT_STATES.ACCEPTED) return true;
  if (consentState !== CONSENT_STATES.CONFIGURED) return false;

  const settings = getCookieSettings();
  return Boolean(settings?.preferences);
};

export const setConsentState = (state) => {
  writeLocalStorage(CONSENT_KEY, state);

  if (isBrowser()) {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  }
};

export const saveCookieSettings = (settings) => {
  const normalizedSettings = normalizeCookieSettings(settings);
  writeLocalStorage(SETTINGS_KEY, JSON.stringify(normalizedSettings));
  setConsentState(CONSENT_STATES.CONFIGURED);

  if (!normalizedSettings.preferences) {
    clearNonEssentialPreferences();
  }
};

export const acceptCookies = () => {
  setConsentState(CONSENT_STATES.ACCEPTED);
};

export const rejectCookies = () => {
  setConsentState(CONSENT_STATES.REJECTED);
  clearNonEssentialPreferences();
};

export const onConsentStateChange = (handler) => {
  if (!isBrowser()) return () => {};
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
};
