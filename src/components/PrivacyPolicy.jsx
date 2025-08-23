import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Cookie, Globe, Mail, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <section id="privacy-policy" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('privacy.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('privacy.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {/* Información que recopilamos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('privacy.dataCollection.title')}
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t('privacy.dataCollection.description')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacy.dataCollection.language')}</li>
                <li>{t('privacy.dataCollection.theme')}</li>
                <li>{t('privacy.dataCollection.navigation')}</li>
              </ul>
            </div>
          </div>

          {/* Uso de cookies */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('privacy.cookies.title')}
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t('privacy.cookies.description')}</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {t('privacy.cookies.essential.title')}
                  </h4>
                  <p className="text-sm">{t('privacy.cookies.essential.description')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {t('privacy.cookies.preference.title')}
                  </h4>
                  <p className="text-sm">{t('privacy.cookies.preference.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Derechos del usuario */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('privacy.rights.title')}
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t('privacy.rights.description')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacy.rights.access')}</li>
                <li>{t('privacy.rights.delete')}</li>
                <li>{t('privacy.rights.modify')}</li>
              </ul>
              <p className="text-sm">
                {t('privacy.rights.contact')} 
                <a 
                  href="mailto:personal@demofilo.net" 
                  className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                >
                  personal@demofilo.net
                </a>
              </p>
            </div>
          </div>

          {/* Fecha de actualización */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('privacy.lastUpdated.title')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('privacy.lastUpdated.date')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
