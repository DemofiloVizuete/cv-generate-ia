export const CONSENT_STATES = {
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  CONFIGURED: 'configured',
  UNKNOWN: 'unknown'
};

const CONSENT_KEY = 'cookieConsent';
const SETTINGS_KEY = 'cookieSettings';
const CONSENT_EVENT = 'cookieConsentChanged';

const isBrowser = () => typeof window !== 'undefined';

const readLocalStorage = (key) => {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(key);
};

const writeLocalStorage = (key, value) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, value);
};

const removeLocalStorage = (key) => {
  if (!isBrowser()) return;
  window.localStorage.removeItem(key);
};

export const clearNonEssentialPreferences = () => {
  removeLocalStorage('i18nextLng');
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
  const raw = readLocalStorage(SETTINGS_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
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
  writeLocalStorage(SETTINGS_KEY, JSON.stringify(settings));
  setConsentState(CONSENT_STATES.CONFIGURED);

  if (!settings.preferences) {
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
