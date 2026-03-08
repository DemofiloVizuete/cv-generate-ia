import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Cookie, ExternalLink, Settings } from 'lucide-react';
import { Button } from './ui/button';
import {
  CONSENT_STATES,
  acceptCookies,
  getConsentState,
  rejectCookies
} from '../lib/consent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (getConsentState() === CONSENT_STATES.UNKNOWN) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    acceptCookies();
    setIsVisible(false);
  };

  const handleRejectCookies = () => {
    rejectCookies();
    setIsVisible(false);
  };

  const openSettings = () => {
    setIsVisible(false);
    // Disparar evento personalizado para abrir configuración
    window.dispatchEvent(new CustomEvent('openCookieSettings'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                {t('cookies.title')}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('cookies.description')}
                <a 
                  href="#privacy-policy" 
                  className="text-primary hover:text-primary/80 ml-1 inline-flex items-center gap-1 hover:underline"
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
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Settings className="h-4 w-4 mr-1" />
              {t('cookies.settings')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectCookies}
              className="hover:bg-secondary"
            >
              {t('cookies.reject')}
            </Button>
            <Button
              size="sm"
              onClick={handleAcceptCookies}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
