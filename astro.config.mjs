import { defineConfig } from 'astro/config'
import { locales } from './src/i18n/i18n.ts'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales,
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  }
})
