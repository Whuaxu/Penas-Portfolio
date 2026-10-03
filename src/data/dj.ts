import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Show {
  photo: ImageMetadata;
  alt: Localized;
  /** Venue or event, shown under the photo */
  caption?: string;
  /** YYYY-MM */
  date?: string;
}

// Add show photos to src/assets/dj/ and list them here, e.g.
// import show01 from '../assets/dj/show-01.jpg';
// { photo: show01, alt: { es: '…', en: '…' }, caption: 'Sala X', date: '2026-08' },
export const shows: Show[] = [];

/** Empty frames shown while there are no photos yet */
export const placeholderFrames = 3;

export const djFacts: { label: Localized; items: (string | Localized)[] }[] = [
  {
    label: { es: 'Géneros', en: 'Genres' },
    items: [{ es: 'Urbana', en: 'Urban' }, 'Reggaetón', 'Pop', 'House', 'Hard techno', 'Schranz'],
  },
  {
    label: { es: 'Equipo', en: 'Gear' },
    items: ['Pioneer CDJ / XDJ', 'All-in-One', 'Traktor S8', 'Rekordbox', 'iTunes'],
  },
  {
    label: { es: 'Destacado', en: 'Highlights' },
    items: ['ERASMUS Dreamland 2024/2025', 'ESI · Erasmus Istanbul Sports'],
  },
];

export interface Venue {
  name: string;
  place?: string;
  note?: Localized;
}

export const venues: { region: Localized; list: Venue[] }[] = [
  {
    region: { es: 'España', en: 'Spain' },
    list: [
      { name: 'LaCalle', place: 'Laracha' },
      { name: 'Marabú', place: 'Carballo' },
      { name: 'Cine París', place: 'A Coruña' },
      { name: 'La Terracita', place: 'A Coruña' },
      { name: 'El Cielo', place: 'A Coruña' },
      { name: 'Compinche', place: 'A Coruña' },
      { name: 'Discoteca Iris', place: 'Betanzos' },
      { name: 'Sky Lounge', place: 'Aguadulce' },
      { name: 'Bribón del Puerto', place: 'Aguadulce' },
    ],
  },
  {
    region: { es: 'Estambul', en: 'Istanbul' },
    list: [
      { name: 'BackStreet', note: { es: 'Dreamland · fiestas propias', en: 'Dreamland · own parties' } },
      { name: 'Firin' },
      { name: 'Klein Harbiye' },
      { name: 'Boat Parties', note: { es: 'ESI y BackStreet', en: 'ESI & BackStreet' } },
      { name: 'Ritim' },
      { name: 'Bosphorus Club Parties' },
      { name: 'RiDDIM' },
      { name: 'Temple' },
      { name: 'Lost' },
    ],
  },
];
