import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, Cookie, Shield, Globe, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import {
  DEFAULT_COOKIE_SETTINGS,
  CONSENT_STATES,
  getConsentState,
  getCookieSettings,
  onConsentStateChange,
  saveCookieSettings
} from '../lib/consent';

const CookieSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_COOKIE_SETTINGS);
  const { t } = useTranslation();

  useEffect(() => {
    const currentConsentState = getConsentState();

    if (currentConsentState === CONSENT_STATES.CONFIGURED) {
      const savedSettings = getCookieSettings();
      if (savedSettings) {
        setSettings((previousSettings) => ({ ...previousSettings, ...savedSettings }));
      }
    }

    if (currentConsentState === CONSENT_STATES.REJECTED) {
      setSettings((previousSettings) => ({ ...previousSettings, preferences: false }));
    }

    // Escuchar evento para abrir configuración
    const handleOpenSettings = () => setIsOpen(true);
    const removeConsentListener = onConsentStateChange(() => {
      const nextConsentState = getConsentState();

      if (nextConsentState === CONSENT_STATES.CONFIGURED) {
        const savedSettings = getCookieSettings();
        if (savedSettings) {
          setSettings((previousSettings) => ({ ...previousSettings, ...savedSettings }));
        }
      }

      if (nextConsentState === CONSENT_STATES.REJECTED) {
        setSettings((previousSettings) => ({ ...previousSettings, preferences: false }));
      }
    });
    window.addEventListener('openCookieSettings', handleOpenSettings);
    
    return () => {
      removeConsentListener();
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  const handleSaveSettings = () => {
    saveCookieSettings(settings);
    
    setIsOpen(false);
    
    // Mostrar confirmación
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300';
    toast.textContent = t('cookies.settingsSaved');
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
  };

  const handleToggle = (key, value) => {
    if (key === 'essential') return; // No se puede desactivar
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="fixed bottom-4 left-4 z-40 bg-card border border-border shadow-lg hover:shadow-xl hover:bg-accent"
        >
          <Settings className="h-4 w-4 mr-2" />
          {t('cookies.settings')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            {t('cookies.settingsTitle')}
          </DialogTitle>
          <DialogDescription>
            {t('cookies.settingsDescription')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Cookies Esenciales */}
          <div className="flex items-center justify-between space-x-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-green-500" />
                <Label className="font-medium">{t('privacy.cookies.essential.title')}</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('privacy.cookies.essential.description')}
              </p>
            </div>
            <Switch
              checked={settings.essential}
              disabled={true}
              aria-label="Cookies esenciales (obligatorias)"
            />
          </div>

          {/* Cookies de Preferencia */}
          <div className="flex items-center justify-between space-x-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="h-4 w-4 text-primary" />
                <Label className="font-medium">{t('privacy.cookies.preference.title')}</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('privacy.cookies.preference.description')}
              </p>
            </div>
            <Switch
              checked={settings.preferences}
              onCheckedChange={(checked) => handleToggle('preferences', checked)}
              aria-label="Cookies de preferencia"
            />
          </div>

          {/* Información adicional */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
            <p className="text-sm text-primary">
              💡 {t('cookies.settingsNote')}
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            {t('common.cancel')}
          </Button>
          <Button onClick={handleSaveSettings}>
            {t('common.save')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
