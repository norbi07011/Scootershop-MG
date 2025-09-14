
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const { t } = useTranslations();

  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
    } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-neon-red after:transition-all after:duration-300 ${
        isActive ? 'after:w-full' : 'hover:after:w-full'
    }`;


  return (
    <header className="sticky top-0 z-50 bg-base-dark/80 backdrop-blur-sm shadow-lg shadow-black/20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold tracking-wider text-white uppercase">
              Scootershop <span className="text-neon-red">MG</span>
            </NavLink>
          </div>
            <div className="flex items-center gap-4">
              {/* Desktop navigation */}
              <nav className="hidden md:flex md:space-x-4">
                <NavLink to="/" className={navLinkClasses}>
                  {t('nav.home')}
                </NavLink>
                <NavLink to="/services" className={navLinkClasses}>
                  {t('nav.services')}
                </NavLink>
                <NavLink to="/about" className={navLinkClasses}>
                  {t('nav.about')}
                </NavLink>
                <NavLink to="/contact" className={navLinkClasses}>
                  {t('nav.contact')}
                </NavLink>
              </nav>
              {/* Hamburger icon for mobile */}
              <button
                className="md:hidden flex items-center px-2 py-1 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Menu"
                onClick={handleMenuToggle}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
              <LanguageSwitcher />
            </div>
            {/* Mobile menu dropdown */}
            {menuOpen && (
              <nav className="absolute top-16 left-0 w-full bg-base-dark/95 shadow-lg z-50 flex flex-col items-center py-4 md:hidden animate-fade-in">
                <NavLink to="/" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                  {t('nav.home')}
                </NavLink>
                <NavLink to="/services" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                  {t('nav.services')}
                </NavLink>
                <NavLink to="/about" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                  {t('nav.about')}
                </NavLink>
                <NavLink to="/contact" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                  {t('nav.contact')}
                </NavLink>
              </nav>
            )}
        </div>
      </div>
    </header>
  );
};
