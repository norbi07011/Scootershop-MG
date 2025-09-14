
export type LanguageCode = 'nl' | 'en' | 'tr' | 'pl' | 'bg' | 'ar' | 'de' | 'hu' | 'fr';

export interface Language {
  code: LanguageCode;
  name: string;
  isRTL?: boolean;
}

export type Translations = {
  [key: string]: any;
};

export interface Testimonial {
  quote: string;
  author: string;
}
