// Updates src/data/linkedin.json from a LinkedIn data export.
//
//   pnpm sync:linkedin ~/Descargas/Complete_LinkedInDataExport_XX.zip
//
// Only Positions.csv, Certifications.csv and Skills.csv are read; the rest of the
// export (messages, connections…) is never extracted. Then it reports anything new
// that src/data/linkedin-editorial.ts doesn't know how to show yet.
import { execFileSync } from 'node:child_process';
import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  certifications as certificationEditorial,
  companies,
  hiddenSkills,
  key,
  skillGroups,
} from '../src/data/linkedin-editorial.ts';

const FILES = ['Positions.csv', 'Certifications.csv', 'Skills.csv'] as const;
const OUTPUT = new URL('../src/data/linkedin.json', import.meta.url);

const MONTHS: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

/** "Sep 2026" → "2026-09"; empty → undefined */
function toYearMonth(value: string): string | undefined {
  const match = value.trim().match(/^([A-Z][a-z]{2}) (\d{4})$/);
  if (!value.trim()) return undefined;
  if (!match || !MONTHS[match[1]]) throw new Error(`Unexpected LinkedIn date: "${value}"`);
  return `${match[2]}-${MONTHS[match[1]]}`;
}

/** Minimal RFC 4180 CSV parser (quoted fields, escaped quotes, newlines in quotes) */
function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  const input = text.replace(/^\uFEFF/, ''); // strip the BOM LinkedIn adds

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (quoted) {
      if (char === '"' && input[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && input[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += char;
  }
  if (field || row.length) rows.push([...row, field]);

  const [header, ...data] = rows.filter((r) => r.some((cell) => cell.trim()));
  return data.map((cells) => Object.fromEntries(header.map((name, i) => [name.trim(), (cells[i] ?? '').trim()])));
}

/** Reads one CSV from the export, which can be the ZIP or an unzipped folder */
function readExportFile(source: string, name: string): string {
  if (statSync(source).isDirectory()) return readFileSync(join(source, name), 'utf8');
  return execFileSync('unzip', ['-p', source, name], { encoding: 'utf8' });
}

const source = process.argv[2];
if (!source) {
  console.error('Usage: pnpm sync:linkedin <path to the LinkedIn export ZIP or folder>');
  process.exit(1);
}

const [positionsCsv, certificationsCsv, skillsCsv] = FILES.map((name) => parseCsv(readExportFile(source, name)));

const data = {
  positions: positionsCsv.map((p) => ({
    company: p['Company Name'],
    title: p['Title'],
    location: p['Location'] || undefined,
    start: toYearMonth(p['Started On'])!,
    end: toYearMonth(p['Finished On']),
  })),
  certifications: certificationsCsv.map((c) => ({
    name: c['Name'],
    authority: c['Authority'],
    url: c['Url'] || undefined,
    date: toYearMonth(c['Started On']),
  })),
  skills: skillsCsv.map((s) => s['Name']).filter(Boolean),
};

writeFileSync(OUTPUT, `${JSON.stringify(data, null, 2)}\n`);

// ---------- Report ----------

const warnings: string[] = [];

const knownCompanies = new Set(companies.map((c) => key(c.linkedin)));
for (const company of new Set(data.positions.map((p) => p.company))) {
  if (!knownCompanies.has(key(company))) {
    warnings.push(`New company "${company}": shown at the end without location or stack. Add it to "companies".`);
  }
}

const knownCertifications = new Set(certificationEditorial.map((c) => key(c.linkedin)));
for (const cert of data.certifications) {
  if (!knownCertifications.has(key(cert.name))) {
    warnings.push(`New certification "${cert.name}" (${cert.authority}): shown last. Add it to "certifications" to place it.`);
  }
}
const exportedCertifications = new Set(data.certifications.map((c) => key(c.name)));
for (const cert of certificationEditorial) {
  if (!exportedCertifications.has(key(cert.linkedin))) {
    warnings.push(`Certification "${cert.name}" is no longer on LinkedIn: it won't be shown.`);
  }
}

const mappedSkills = new Set([
  ...skillGroups.flatMap((g) => g.items.flatMap((item) => item.from)),
  ...hiddenSkills,
].map(key));
for (const skill of data.skills) {
  if (!mappedSkills.has(key(skill))) {
    warnings.push(`New skill "${skill}": not shown until it is added to a group (or to "hiddenSkills").`);
  }
}

console.log(
  `Updated src/data/linkedin.json: ${data.positions.length} positions, ` +
    `${data.certifications.length} certifications, ${data.skills.length} skills.`,
);
if (warnings.length) {
  console.log(`\n${warnings.length} thing(s) to review in src/data/linkedin-editorial.ts:`);
  for (const warning of warnings) console.log(`  - ${warning}`);
} else {
  console.log('Everything on LinkedIn already has its place on the site.');
}
