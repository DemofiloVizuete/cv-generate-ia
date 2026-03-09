import { useEffect, useRef, useState } from 'react';
import { onConsentStateChange } from '../../lib/consent';
import { getInitialThemePreference, syncThemePreference } from '../../lib/preferences';

export const useThemeMode = () => {
  const [darkMode, setDarkMode] = useState(() => getInitialThemePreference());
  const darkModeRef = useRef(darkMode);

  useEffect(() => {
    darkModeRef.current = darkMode;

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    syncThemePreference(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const removeConsentListener = onConsentStateChange(() => {
      syncThemePreference(darkModeRef.current);
    });

    return () => {
      removeConsentListener();
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  return {
    darkMode,
    toggleDarkMode
  };
};
