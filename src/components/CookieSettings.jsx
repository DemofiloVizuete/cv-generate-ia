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

const CookieSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    essential: true, // Siempre true, no se puede desactivar
    preferences: true,
    analytics: false // No las usamos, pero las dejamos para futuro
  });
  const { t } = useTranslation();

  useEffect(() => {
    // Cargar configuración guardada
    const savedSettings = localStorage.getItem('cookieSettings');
    if (savedSettings) {
      setSettings({ ...settings, ...JSON.parse(savedSettings) });
    }

    // Escuchar evento para abrir configuración
    const handleOpenSettings = () => setIsOpen(true);
    window.addEventListener('openCookieSettings', handleOpenSettings);
    
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    localStorage.setItem('cookieConsent', 'configured');
    
    // Si se desactivan las preferencias, limpiar datos relacionados
    if (!settings.preferences) {
      localStorage.removeItem('i18nextLng');
      document.cookie = "sidebar_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    
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
          className="fixed bottom-4 left-4 z-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
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
                <Shield className="h-4 w-4 text-green-600" />
                <Label className="font-medium">{t('privacy.cookies.essential.title')}</Label>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
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
                <Globe className="h-4 w-4 text-blue-600" />
                <Label className="font-medium">{t('privacy.cookies.preference.title')}</Label>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
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
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
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
