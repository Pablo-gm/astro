// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'always',
  },
  adapter: vercel(),
  integrations: [sitemap()],
  site: 'https://www.infolavelada.com/',

});