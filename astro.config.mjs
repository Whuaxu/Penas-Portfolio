// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://javipena.vercel.app',

  // The CSS is small: inlining it saves render-blocking requests on first load
  build: {
    inlineStylesheets: 'always'
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' }
      }
    })
  ],

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
