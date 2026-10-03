import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export function toLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
