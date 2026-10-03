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
    'about.kicker': 'Notas del disco',
    'about.p1':
      'Soy Javier Pena Bello, ingeniero informático por la Escola Superior de Enxeñaría Informática de la Universidade de Vigo, con un año de Erasmus en İstanbul Aydın University. Hoy trabajo como desarrollador full stack en ALIA Technologies y como advisor en Auria Technologies, en Ourense.',
    'about.p2':
      'Me muevo entre el backend con TypeScript y Node.js, los ERP con Odoo y la automatización con IA. Ahora mismo me estoy formando en ciberseguridad, un campo que me entusiasma especialmente. Y desde 2023 tengo otra cabina: la de DJ.',
    'about.education': 'Formación',
    'about.certifications': 'Certificaciones',
    'about.skills': 'Aptitudes',
    'experience.now': 'hoy',
    'projects.status': 'Próximamente',
    'projects.text': 'Este lado del disco todavía está en el estudio. Estoy preparando los proyectos que irán aquí.',
    'projects.github': 'Mientras tanto, en GitHub',
    'projects.live': 'Web',
    'projects.code': 'Código',
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
    'about.kicker': 'Liner notes',
    'about.p1':
      "I'm Javier Pena Bello, a computer engineer from the Higher School of Computer Engineering (ESEI) at the University of Vigo, with an Erasmus year at İstanbul Aydın University. Today I work as a full stack developer at ALIA Technologies and as an advisor at Auria Technologies, in Ourense.",
    'about.p2':
      "I move between backend work with TypeScript and Node.js, ERPs with Odoo and AI-driven automation. Right now I'm training in cybersecurity, a field I'm especially excited about. And since 2023 I have a second booth: the DJ one.",
    'about.education': 'Education',
    'about.certifications': 'Certifications',
    'about.skills': 'Skills',
    'experience.now': 'now',
    'projects.status': 'Coming soon',
    'projects.text': "This side of the record is still in the studio. I'm getting ready the projects that will land here.",
    'projects.github': 'Meanwhile, on GitHub',
    'projects.live': 'Website',
    'projects.code': 'Code',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
