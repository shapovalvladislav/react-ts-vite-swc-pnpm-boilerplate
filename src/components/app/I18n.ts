import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { SupportedLanguage } from '@/utils/enums';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: SupportedLanguage.UK,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: Object.values(SupportedLanguage),
  });

export default i18n;
