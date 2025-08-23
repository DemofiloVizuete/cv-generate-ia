import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Cookie, ExternalLink, Settings } from 'lucide-react';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    // Limpiar cookies existentes (excepto las esenciales)
    localStorage.removeItem('i18nextLng');
    document.cookie = "sidebar_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsVisible(false);
  };

  const openSettings = () => {
    setIsVisible(false);
    // Disparar evento personalizado para abrir configuración
    window.dispatchEvent(new CustomEvent('openCookieSettings'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('cookies.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('cookies.description')}
                <a 
                  href="#privacy-policy" 
                  className="text-blue-600 dark:text-blue-400 hover:underline ml-1 inline-flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('cookies.learnMore')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
            <Button
              variant="outline"
              size="sm"
              onClick={openSettings}
              className="text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Settings className="h-4 w-4 mr-1" />
              {t('cookies.settings')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {t('cookies.reject')}
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t('cookies.accept')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
