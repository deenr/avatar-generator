// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-17',
  devtools: { enabled: true },
  modules: ['@nuxt/hints', '@nuxt/ui', '@nuxt/image', 'nuxt-lucide-icons', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
  lucide: {
    namePrefix: 'Icon',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      title: 'Avatar Generator - Create Beautiful Avatars',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Create beautiful, customizable avatars with text, colors, patterns, and gradients. Choose from 24+ fonts, 10 unique patterns, and 6 pre-designed templates.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#10b981' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Avatar Generator - Create Beautiful Avatars' },
        {
          property: 'og:description',
          content:
            'Create beautiful, customizable avatars with text, colors, patterns, and gradients.',
        },
        { property: 'og:site_name', content: 'Avatar Generator' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Avatar Generator - Create Beautiful Avatars' },
        {
          name: 'twitter:description',
          content:
            'Create beautiful, customizable avatars with text, colors, patterns, and gradients.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
});
