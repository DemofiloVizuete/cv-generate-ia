const isBrowser = () => typeof window !== 'undefined';
export const THEME_STORAGE_KEY = 'cvTheme';
export const LANGUAGE_STORAGE_KEY = 'i18nextLng';
export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const readLocalStorage = (key) => {
  if (!isBrowser()) return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeLocalStorage = (key, value) => {
  if (!isBrowser()) return false;

  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

export const removeLocalStorage = (key) => {
  if (!isBrowser()) return false;

  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

export const readLocalStorageJSON = (key) => {
  const raw = readLocalStorage(key);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};
