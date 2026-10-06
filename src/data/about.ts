import type { Lang } from '../i18n/ui';
import linkedin from './linkedin.json';
import { certifications as certificationEditorial, key, skillGroups as skillGroupEditorial } from './linkedin-editorial';

type Localized = Record<Lang, string>;

export const education: { title: Localized; school: string; period: string }[] = [
  {
    title: { es: 'Grado en Ingeniería Informática', en: 'BSc in Computer Engineering' },
    school: 'ESEI · Universidade de Vigo',
    period: '2021 - 2026',
  },
  {
    title: { es: 'Erasmus · Computer Engineering', en: 'Erasmus · Computer Engineering' },
    school: 'İstanbul Aydın University',
    period: '2024 - 2025',
  },
];

// Certifications and skills come from LinkedIn (pnpm sync:linkedin); order, clean
// names and grouping from linkedin-editorial.ts
const editorialCert = (name: string) => certificationEditorial.findIndex((c) => key(c.linkedin) === key(name));

export const certifications: { name: string; issuer: string }[] = linkedin.certifications
  .map((cert, i) => ({ cert, i, at: editorialCert(cert.name) }))
  .sort((a, b) => (a.at === -1 ? Infinity : a.at) - (b.at === -1 ? Infinity : b.at) || a.i - b.i)
  .map(({ cert, at }) =>
    at === -1
      ? { name: cert.name, issuer: cert.authority }
      : { name: certificationEditorial[at].name, issuer: certificationEditorial[at].issuer },
  );

const skillsOnLinkedIn = new Set(linkedin.skills.map(key));

export const skillGroups: { title: Localized; items: (string | Localized)[] }[] = skillGroupEditorial
  .map(({ title, items }) => ({
    title,
    items: items.filter((item) => item.from.some((name) => skillsOnLinkedIn.has(key(name)))).map((item) => item.label),
  }))
  .filter((group) => group.items.length > 0);
