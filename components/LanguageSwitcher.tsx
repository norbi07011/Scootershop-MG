
import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { SUPPORTED_LANGUAGES } from '../constants';
import { ChevronDownIcon, GlobeAltIcon, FlagIcon } from './icons';
import { LanguageCode } from '../types';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-neon-blue"
      >
        {currentLang ? <FlagIcon code={currentLang.code} className="w-5 h-auto rounded-sm" /> : <GlobeAltIcon className="w-5 h-5" />}
        <span className="hidden sm:inline">{currentLang?.name}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute end-0 z-10 w-40 mt-2 origin-top-right bg-gray-800 border border-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center w-full gap-3 px-4 py-2 text-sm text-start text-gray-300 transition-colors duration-150 hover:bg-gray-700"
              >
                <FlagIcon code={lang.code} className="w-5 h-auto rounded-sm" />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
