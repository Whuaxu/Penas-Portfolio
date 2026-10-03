export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Javi Pena - Portfolio',
    'meta.description': 'Portfolio de Javi Pena, ingeniero informático y desarrollador full stack.',
    'lang.switch': 'Cambiar idioma',
  },
  en: {
    'meta.title': 'Javi Pena - Portfolio',
    'meta.description': 'Portfolio of Javi Pena, computer engineer and full stack developer.',
    'lang.switch': 'Change language',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
