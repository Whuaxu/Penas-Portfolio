import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import auriaCover from '../assets/projects/auria-fsai.webp';
import noeliaCover from '../assets/projects/noelia-suarez.webp';

type Localized = Record<Lang, string>;

export interface Release {
  /** Catalog number shown on the sleeve, e.g. JPB-001 */
  catalog: string;
  year: string;
  title: Localized;
  description: Localized;
  stack: string[];
  repo?: string;
  url?: string;
  cover: ImageMetadata;
  coverAlt: Localized;
}

export const releases: Release[] = [
  {
    catalog: 'JPB-001',
    year: '2025',
    title: { es: 'Noelia Suárez · Fotografía', en: 'Noelia Suárez · Photography' },
    description: {
      es: 'Web oficial de la fotógrafa Noelia Suárez: portfolio por categorías con galerías a pantalla completa, sobre mí y contacto. Sin frameworks ni build, con imágenes WebP optimizadas.',
      en: 'Official website of photographer Noelia Suárez: portfolio by category with full-screen galleries, about and contact pages. No framework or build step, with optimized WebP images.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Vercel'],
    repo: 'https://github.com/Whuaxu/Noelia-Suarez-Website',
    url: 'https://noeliasuarez.vercel.app',
    cover: noeliaCover,
    coverAlt: {
      es: 'Persona de espaldas frente al mar y la ciudad, primera foto de la web',
      en: 'Person seen from behind facing the sea and the city, the first photo on the site',
    },
  },
  {
    catalog: 'JPB-002',
    year: '2026',
    title: { es: 'Auria · Autonomous System', en: 'Auria · Autonomous System' },
    description: {
      es: 'Participé en el desarrollo del sistema de conducción autónoma del monoplaza de Auria Technologies, el equipo de Formula Student AI de la Universidade de Vigo: percepción por cámara, localización, planificación de trayectoria y control. Compitió en FS-AI UK 2026 en Silverstone y se trajo un podio.',
      en: "I took part in building the self-driving stack for the single-seater of Auria Technologies, the University of Vigo's Formula Student AI team: camera-based perception, localization, trajectory planning and control. It raced at FS-AI UK 2026 at Silverstone and came home with a podium.",
    },
    stack: ['Python', 'C++', 'NATS', 'CarMaker', 'Arduino', 'Git'],
    // Code lives in a private repository (AuriaTechnologies/autonomous_system)
    url: 'https://auria.gal',
    cover: auriaCover,
    coverAlt: {
      es: 'El equipo de Auria Technologies en su carpa de FS-AI UK 2026 con el dorsal 33',
      en: 'The Auria Technologies team in their FS-AI UK 2026 tent with car number 33',
    },
  },
];
