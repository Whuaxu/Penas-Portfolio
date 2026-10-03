export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Javi Pena - Portfolio',
    'meta.description': 'Portfolio de Javi Pena, ingeniero informático, desarrollador full stack y DJ.',
    'lang.switch': 'Cambiar idioma',
    'nowPlaying.label': 'Sonando',
    'nowPlaying.track': 'Junior Software Developer',
    'nowPlaying.artist': 'ALIA Technologies',
    'hero.tagline': 'código de día · cabina de noche',
    'hero.intro':
      'Ingeniero informático por la ESEI (UVigo). Desarrollador full stack en ALIA Technologies y advisor en Auria Technologies. Fuera del editor, DJ desde 2023.',
    'hero.sections': 'Secciones',
    'hero.padsHint': 'Pulsa 1-5 para saltar',
    'deck.vinyl': 'Vinilo en el plato',
    'deck.cue': 'Cue',
    'deck.playPause': 'Reproducir / pausar',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.dj': 'DJ',
    'nav.contact': 'Contacto',
  },
  en: {
    'meta.title': 'Javi Pena - Portfolio',
    'meta.description': 'Portfolio of Javi Pena, computer engineer, full stack developer and DJ.',
    'lang.switch': 'Change language',
    'nowPlaying.label': 'Now playing',
    'nowPlaying.track': 'Junior Software Developer',
    'nowPlaying.artist': 'ALIA Technologies',
    'hero.tagline': 'code by day · decks by night',
    'hero.intro':
      'Computer engineer from ESEI (UVigo). Full stack developer at ALIA Technologies and advisor at Auria Technologies. Away from the editor, a DJ since 2023.',
    'hero.sections': 'Sections',
    'hero.padsHint': 'Press 1-5 to jump',
    'deck.vinyl': 'Vinyl on the deck',
    'deck.cue': 'Cue',
    'deck.playPause': 'Play / pause',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.dj': 'DJ',
    'nav.contact': 'Contact',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
