// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
  },
  extends: [
    '@nuxt/ui-pro',
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Newsreader: [400, 500, 600],
      'JetBrains Mono': [400, 500],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],
  supabase: {
    redirectOptions: {
      callback: '/confirm',
      exclude: [
        '/',
      ],
      login: '/login',
    },
  },
})