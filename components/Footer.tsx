
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

export const Footer: React.FC = () => {
  const { t } = useTranslations();
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container px-4 py-6 mx-auto text-center text-gray-400 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Scootershop MG bv. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};
