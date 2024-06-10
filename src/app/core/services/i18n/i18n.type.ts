/* eslint-disable @typescript-eslint/no-explicit-any */
import enUS from './translations/en-US';
import esES from './translations/es-ES';
import ptBR from './translations/pt-BR';

export interface Language {
  code: string;
  dateCode: string;
  translations: any;
}

export type LanguageCode = 'pt-BR' | 'en-US' | 'es-ES';

export type Languages = Record<LanguageCode, Language>;

export type Translations = Record<string, Record<string, any>>;

export const LANGUAGES: Languages = {
  'pt-BR': {
    code: 'pt-BR',
    dateCode: 'pt-br',
    translations: ptBR,
  },

  'en-US': {
    code: 'en-US',
    dateCode: 'en',
    translations: enUS,
  },

  'es-ES': {
    code: 'es-ES',
    dateCode: 'es',
    translations: esES,
  },
};
