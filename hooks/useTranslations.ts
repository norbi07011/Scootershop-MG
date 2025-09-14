import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { LanguageCode, Translations } from '../types';

// FIX: Changed return type to `any` to support nested objects in translations.
function getNestedTranslation(translations: Translations, key: string): any {
  return key.split('.').reduce((obj, k) => (obj && obj[k] !== 'undefined' ? obj[k] : undefined), translations);
}

export const useTranslations = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  
  const { language } = context;
  const translations = getTranslation(language as LanguageCode);

  // FIX: Changed return type to `any` to support returning translation objects.
  const t = (key: string): any => {
    const translation = getNestedTranslation(translations, key);
    return translation || key;
  };

  return { t, language, setLanguage: context.setLanguage };
};
