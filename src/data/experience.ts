import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Role {
  title: Localized;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, omitted while ongoing */
  end?: string;
}

export interface Track {
  company: string;
  location?: string;
  roles: Role[];
  /** Skills LinkedIn links to this experience */
  stack: (string | Localized)[];
}

// Newest first; side/number labels (A1, A2, B1…) are derived from the order
export const tracks: Track[] = [
  {
    company: 'ALIA Technologies',
    location: 'Ourense',
    roles: [
      { title: { es: 'Junior Software Developer', en: 'Junior Software Developer' }, start: '2026-07' },
      { title: { es: 'Junior Full Stack Developer', en: 'Junior Full Stack Developer' }, start: '2025-11', end: '2026-07' },
    ],
    stack: [
      'TypeScript',
      'LoopBack 4',
      'Angular',
      'Vue.js',
      'Nuxt.js',
      'Odoo',
      'PrestaShop',
      'MongoDB',
      'MySQL',
      'Redis',
      'Docker',
      'GitLab',
      'CI/CD',
      'SonarQube',
      'Anthropic Claude',
      'Spec-driven development',
    ],
  },
  {
    company: 'Auria Technologies',
    location: 'Ourense',
    roles: [
      { title: { es: 'Advisor', en: 'Advisor' }, start: '2026-09' },
      { title: { es: 'Ingeniero de desarrollo', en: 'Development engineer' }, start: '2025-09', end: '2026-09' },
    ],
    stack: ['Python', 'C++', 'NATS', 'Arduino', 'CarMaker', 'Git'],
  },
  {
    company: 'DJ',
    roles: [{ title: { es: 'Profesional independiente', en: 'Freelance' }, start: '2023-07' }],
    stack: [
      'Rekordbox',
      'iTunes',
      { es: 'Mezcla de música', en: 'Music mixing' },
    ],
  },
];
