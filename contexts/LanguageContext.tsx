
import React, { createContext, useState, useEffect, useMemo } from 'react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE_CODE } from '../constants';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const savedLanguage = localStorage.getItem('language');
      return (savedLanguage as LanguageCode) || DEFAULT_LANGUAGE_CODE;
    } catch (error) {
      return DEFAULT_LANGUAGE_CODE;
    }
  });

  useEffect(() => {
    const selectedLang = SUPPORTED_LANGUAGES.find(l => l.code === language);
    if (selectedLang?.isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (langCode: LanguageCode) => {
    try {
      localStorage.setItem('language', langCode);
    } catch (error) {
      console.error('Could not save language to localStorage', error);
    }
    setLanguageState(langCode);
  };

  const contextValue = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
