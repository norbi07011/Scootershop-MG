
import { Language } from './types';

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'nl', name: 'NL' },
  { code: 'en', name: 'EN' },
  { code: 'tr', name: 'TR' },
  { code: 'pl', name: 'PL' },
  { code: 'bg', name: 'BG' },
  { code: 'ar', name: 'AR', isRTL: true },
  { code: 'de', name: 'DE' },
  { code: 'hu', name: 'HU' },
  { code: 'fr', name: 'FR' },
];

export const DEFAULT_LANGUAGE_CODE = 'nl';
