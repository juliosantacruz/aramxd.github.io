import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown';


// https://astro.build/config
export default defineConfig({
  integrations:[react(), sitemap(), partytown()],
  site: 'https://juliosantacruz.dev',
  base: '/',
});
