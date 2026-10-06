// Editorial layer on top of the LinkedIn export (src/data/linkedin.json).
// LinkedIn decides WHAT exists (roles, dates, certifications, skills); this file
// decides HOW it is shown (order, translations, grouping, clean names).
// No value imports here: scripts/sync-linkedin.ts loads it directly with Node.
import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

/** Matching key: case, accents, punctuation and spacing don't matter */
export const key = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9+#]+/g, ' ')
    .trim();

// ---------- Experience ----------

export interface CompanyEditorial {
  /** Company name as written on LinkedIn */
  linkedin: string;
  /** Name shown on the site */
  display: string;
  location?: string;
  /** Translations by LinkedIn title; titles not listed are shown as-is */
  titles: Record<string, Localized>;
  /** Not on LinkedIn: technologies used at this company */
  stack: (string | Localized)[];
}

/** Track order on the site (A1, A2, B1…). New companies are appended, newest first */
export const companies: CompanyEditorial[] = [
  {
    linkedin: 'ALIA Technologies',
    display: 'ALIA Technologies',
    location: 'Ourense',
    titles: {},
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
    linkedin: 'Auria Technologies',
    display: 'Auria Technologies',
    location: 'Ourense',
    titles: { 'Ingeniero de desarrollo': { es: 'Ingeniero de desarrollo', en: 'Development engineer' } },
    stack: ['Python', 'C++', 'NATS', 'Arduino', 'CarMaker', 'Git'],
  },
  {
    // LinkedIn stores it as company "Profesional independiente", title "DJ"
    linkedin: 'Profesional independiente',
    display: 'DJ',
    titles: { DJ: { es: 'Profesional independiente', en: 'Freelance' } },
    stack: ['Rekordbox', 'iTunes', { es: 'Mezcla de música', en: 'Music mixing' }],
  },
];

// ---------- Certifications ----------

/** Display order and clean names. Certifications missing here go last, as on LinkedIn */
export const certifications: { linkedin: string; name: string; issuer: string }[] = [
  { linkedin: 'Introduction to Cybersecurity', name: 'Introduction to Cybersecurity', issuer: 'Cisco' },
  {
    linkedin: 'Odoo Curso de desarrollo completo para programadores',
    name: 'Odoo: Curso de desarrollo completo para programadores',
    issuer: 'Udemy',
  },
  {
    linkedin: 'Odoo Conceptos avanzados de Vistas para programadores',
    name: 'Odoo: Conceptos avanzados de Vistas para programadores',
    issuer: 'Udemy',
  },
  {
    linkedin: 'Odoo Conceptos avanzados de Modelos para programadores',
    name: 'Odoo: Conceptos avanzados de Modelos para programadores',
    issuer: 'Udemy',
  },
  {
    linkedin: 'Curso de Odoo 13 - 18 Funcional para Implementadores',
    name: 'Curso de Odoo 13 - 18 Funcional para Implementadores',
    issuer: 'Udemy',
  },
  { linkedin: 'Certificado de Desarrollo con IA', name: 'Certificado de Desarrollo con IA', issuer: 'BIG school' },
  {
    linkedin: 'Certificado Santander Google/ Inteligencia Artificial y productividad',
    name: 'Inteligencia Artificial y productividad',
    issuer: 'Santander · Google',
  },
  { linkedin: 'Build Web Apps with Nuxt.js 3', name: 'Build Web Apps with Nuxt.js 3', issuer: 'Udemy' },
  {
    linkedin: 'LoopBack 4: Modern ways to Build APIs in TypeScript & Node.js',
    name: 'LoopBack 4: Modern ways to Build APIs in TypeScript & Node.js',
    issuer: 'Udemy',
  },
  { linkedin: 'Docker, de principiante a experto', name: 'Docker, de principiante a experto', issuer: 'Udemy' },
  {
    linkedin: 'Ultimate Docker: guia de cero hasta despliegues',
    name: 'Ultimate Docker: guía de cero hasta despliegues',
    issuer: 'Udemy',
  },
  { linkedin: 'Taller Avanzado Finisterrae III', name: 'Taller Avanzado FinisTerrae III', issuer: 'CESGA' },
  { linkedin: 'Taller FinisTerrae III', name: 'Taller FinisTerrae III', issuer: 'CESGA' },
];

// ---------- Skills ----------

/** A shown skill: its label and the LinkedIn skills that make it appear */
export interface SkillEntry {
  label: string | Localized;
  from: string[];
}

export const skillGroups: { title: Localized; items: SkillEntry[] }[] = [
  {
    title: { es: 'Frontend y diseño', en: 'Frontend & design' },
    items: [
      { label: 'TypeScript', from: ['TypeScript'] },
      { label: 'JavaScript', from: ['JavaScript'] },
      { label: 'Angular', from: ['Angular'] },
      { label: 'Vue.js', from: ['Vue.js'] },
      { label: 'Nuxt.js', from: ['Nuxt.js'] },
      { label: 'React Native', from: ['React Native'] },
      { label: 'Expo', from: ['React Expo'] },
      { label: 'Redux', from: ['Redux.js'] },
      { label: 'Tailwind CSS', from: ['Tailwind CSS'] },
      { label: 'Bootstrap', from: ['Bootstrap'] },
      { label: 'HTML', from: ['HTML'] },
      { label: 'CSS', from: ['Css'] },
      { label: 'Figma', from: ['Figma'] },
      { label: 'UI / UX', from: ['UIX'] },
    ],
  },
  {
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    items: [
      { label: 'Node.js', from: ['Node.js'] },
      { label: 'LoopBack 4', from: ['LoopBack 4'] },
      { label: 'REST', from: ['Transferencia de Estado Representacional (REST)', 'API RESTT'] },
      { label: 'Swagger', from: ['API de Swagger'] },
      { label: 'Postman', from: ['API de Postman'] },
      { label: 'NATS', from: ['NATS'] },
      { label: 'Redis', from: ['Redis'] },
      { label: 'Python', from: ['Python'] },
      { label: 'Java', from: ['Java'] },
      { label: 'PHP', from: ['PHP'] },
      { label: 'C++', from: ['C++'] },
      { label: 'C', from: ['Programación en C'] },
    ],
  },
  {
    title: { es: 'Datos', en: 'Data' },
    items: [
      { label: 'SQL', from: ['SQL'] },
      { label: 'MySQL', from: ['MySQL'] },
      { label: 'MongoDB', from: ['MongoDB', 'MongoDB Compass'] },
      { label: 'Oracle SQL Developer', from: ['Oracle SQL Developer'] },
      { label: 'DBeaver', from: ['DBeaver'] },
      { label: 'phpMyAdmin', from: ['PhpMyAdmin'] },
    ],
  },
  {
    title: { es: 'ERP y e-commerce', en: 'ERP & e-commerce' },
    items: [
      { label: 'Odoo', from: ['Odoo'] },
      { label: 'Odoo API', from: ['Odoo API'] },
      { label: 'PrestaShop', from: ['PrestaShop'] },
    ],
  },
  {
    title: { es: 'DevOps', en: 'DevOps' },
    items: [
      { label: 'Docker', from: ['Docker'] },
      { label: 'Docker Compose', from: ['Docker Compose'] },
      { label: 'Portainer', from: ['Docker Portainer'] },
      { label: 'CI/CD', from: ['Integración continua y entrega continua (CI/CD)'] },
      { label: 'Git', from: ['Git'] },
      { label: 'GitFlow', from: ['GitFlow'] },
      { label: 'GitHub', from: ['GitHub'] },
      { label: 'GitLab', from: ['GitLab'] },
      { label: 'SonarQube', from: ['SonarQube'] },
      { label: 'DigitalOcean', from: ['DigitalOcean'] },
      { label: 'Apache', from: ['Apache'] },
      { label: 'Bash', from: ['Bash'] },
      { label: 'Linux', from: ['Linux Mint', 'Ubuntu'] },
    ],
  },
  {
    title: { es: 'IA', en: 'AI' },
    items: [
      { label: 'Anthropic Claude', from: ['Anthropic Claude'] },
      { label: 'Claude Skills', from: ['Claude Skills'] },
      { label: 'Prompt Engineering', from: ['Prompt Engineer'] },
      { label: 'Spec-driven development', from: ['Spec-driven development'] },
      { label: 'SpecKit', from: ['SpekKit'] },
      { label: 'OpenSpec', from: ['OpenSpec'] },
      { label: 'Machine Learning', from: ['Machine Learning'] },
    ],
  },
  {
    title: { es: 'Sistemas y redes', en: 'Systems & networks' },
    items: [
      { label: 'FinisTerrae III', from: ['FinisTerrae III'] },
      { label: 'Arduino', from: ['Arduino', 'Arduino IDE'] },
      { label: 'CarMaker', from: ['CarMaker'] },
      { label: 'Wireshark', from: ['Wireshark'] },
      { label: 'Packet Tracer', from: ['Packet Tracer'] },
      { label: { es: 'Seguridad de redes', en: 'Network security' }, from: ['Seguridad de redes'] },
      { label: { es: 'Redes IP', en: 'IP networking' }, from: ['Interconexión de redes IP'] },
    ],
  },
  {
    title: { es: 'Soft skills', en: 'Soft skills' },
    items: [
      { label: { es: 'Metodologías ágiles', en: 'Agile' }, from: ['Metodologías ágiles'] },
      { label: { es: 'Gestión de proyectos', en: 'Project management' }, from: ['Gestión de proyectos'] },
      { label: { es: 'Oratoria', en: 'Public speaking' }, from: ['Oratoria'] },
      { label: { es: 'Inglés', en: 'English' }, from: ['Inglés'] },
    ],
  },
];

/** LinkedIn skills deliberately left out of the skills grid (too generic, or shown elsewhere) */
export const hiddenSkills = [
  // Generic
  'Programación',
  'Desarrollo web',
  'Desarrollo web back end',
  'Despliegue de sistemas',
  'Aplicaciones móviles',
  'Mobile Systems',
  'Sistemas operativos',
  'Telecomunicaciones',
  'Procesamiento digital de imágenes',
  'JSON',
  'PuTTY',
  'IA',
  'Automatización',
  'Autoskills',
  // DJ side, shown in the DJ section and the DJ track
  'iTunes',
  'Rekordbox',
  'Mezcla de música (DJ)',
  'Relaciones públicas',
  'Estrategia de marketing',
];
