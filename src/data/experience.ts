import type { Lang } from '../i18n/ui';
import linkedin from './linkedin.json';
import { companies, key } from './linkedin-editorial';

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
  /** Technologies used at this company (editorial, not on LinkedIn) */
  stack: (string | Localized)[];
}

// Roles and dates come from LinkedIn (pnpm sync:linkedin); names, translations,
// locations and stacks from linkedin-editorial.ts
const editorialIndex = (company: string) => companies.findIndex((c) => key(c.linkedin) === key(company));
const newestFirst = (a: { start: string }, b: { start: string }) => b.start.localeCompare(a.start);

const byCompany = new Map<string, typeof linkedin.positions>();
for (const position of linkedin.positions) {
  const group = byCompany.get(key(position.company)) ?? [];
  group.push(position);
  byCompany.set(key(position.company), group);
}

// Side/number labels (A1, A2, B1…) follow this order: editorial first, new companies after, newest first
export const tracks: Track[] = [...byCompany.values()]
  .map((positions) => {
    const editorial = companies[editorialIndex(positions[0].company)];
    return {
      order: editorial ? editorialIndex(positions[0].company) : Number.POSITIVE_INFINITY,
      start: [...positions].sort(newestFirst)[0].start,
      track: {
        company: editorial?.display ?? positions[0].company,
        location: editorial ? editorial.location : positions[0].location,
        roles: [...positions].sort(newestFirst).map((p) => ({
          title: editorial?.titles[p.title] ?? { es: p.title, en: p.title },
          start: p.start,
          end: p.end,
        })),
        stack: editorial?.stack ?? [],
      },
    };
  })
  .sort((a, b) => a.order - b.order || b.start.localeCompare(a.start))
  .map(({ track }) => track);
