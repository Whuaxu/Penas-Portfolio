import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const education: { title: Localized; school: string; period: string }[] = [
  {
    title: { es: 'Grado en Ingeniería Informática', en: 'BSc in Computer Engineering' },
    school: 'ESEI · Universidade de Vigo',
    period: '2021 — 2026',
  },
  {
    title: { es: 'Erasmus · Computer Engineering', en: 'Erasmus · Computer Engineering' },
    school: 'İstanbul Aydın University',
    period: '2024 — 2025',
  },
];

// Titles kept as issued
export const certifications: { name: string; issuer: string }[] = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco' },
  { name: 'Odoo: Curso de desarrollo completo para programadores', issuer: 'Udemy' },
  { name: 'Odoo: Conceptos avanzados de Vistas para programadores', issuer: 'Udemy' },
  { name: 'Odoo: Conceptos avanzados de Modelos para programadores', issuer: 'Udemy' },
  { name: 'Curso de Odoo 13 - 18 Funcional para Implementadores', issuer: 'Udemy' },
  { name: 'Certificado de Desarrollo con IA', issuer: 'BIG school' },
  { name: 'Inteligencia Artificial y productividad', issuer: 'Santander · Google' },
  { name: 'Build Web Apps with Nuxt.js 3', issuer: 'Udemy' },
  { name: 'LoopBack 4: Modern ways to Build APIs in TypeScript & Node.js', issuer: 'Udemy' },
  { name: 'Docker, de principiante a experto', issuer: 'Udemy' },
  { name: 'Ultimate Docker: guía de cero hasta despliegues', issuer: 'Udemy' },
  { name: 'Taller Avanzado FinisTerrae III', issuer: 'CESGA' },
  { name: 'Taller FinisTerrae III', issuer: 'CESGA' },
];

export const skillGroups: { title: Localized; items: (string | Localized)[] }[] = [
  {
    title: { es: 'Frontend y diseño', en: 'Frontend & design' },
    items: ['TypeScript', 'JavaScript', 'Angular', 'Vue.js', 'Nuxt.js', 'React Native', 'Expo', 'Redux', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS', 'Figma', 'UI / UX'],
  },
  {
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    items: ['Node.js', 'LoopBack 4', 'REST', 'Swagger', 'Postman', 'NATS', 'Redis', 'Python', 'Java', 'PHP', 'C++', 'C'],
  },
  {
    title: { es: 'Datos', en: 'Data' },
    items: ['SQL', 'MySQL', 'MongoDB', 'Oracle SQL Developer', 'DBeaver', 'phpMyAdmin'],
  },
  {
    title: { es: 'ERP y e-commerce', en: 'ERP & e-commerce' },
    items: ['Odoo', 'Odoo API', 'PrestaShop'],
  },
  {
    title: { es: 'DevOps', en: 'DevOps' },
    items: ['Docker', 'Docker Compose', 'Portainer', 'CI/CD', 'Git', 'GitFlow', 'GitHub', 'GitLab', 'SonarQube', 'DigitalOcean', 'Apache', 'Bash', 'Linux'],
  },
  {
    title: { es: 'IA', en: 'AI' },
    items: ['Anthropic Claude', 'Claude Skills', 'Prompt Engineering', 'Spec-driven development', 'SpecKit', 'OpenSpec', 'Machine Learning'],
  },
  {
    title: { es: 'Sistemas y redes', en: 'Systems & networks' },
    items: ['FinisTerrae III', 'Arduino', 'CarMaker', 'Wireshark', 'Packet Tracer', { es: 'Seguridad de redes', en: 'Network security' }, { es: 'Redes IP', en: 'IP networking' }],
  },
  {
    title: { es: 'Soft skills', en: 'Soft skills' },
    items: [
      { es: 'Metodologías ágiles', en: 'Agile' },
      { es: 'Gestión de proyectos', en: 'Project management' },
      { es: 'Oratoria', en: 'Public speaking' },
      { es: 'Inglés', en: 'English' },
    ],
  },
];
