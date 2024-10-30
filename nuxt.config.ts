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
    display: 'swap',
    families: {
      'DM Sans': {
        wght: [300, 400, 500, 600, 700],
        ital: [300, 400, 500, 600, 700],
      },
      'DM Serif Display': {
        wght: [400],
        ital: [400],
      },
      'JetBrains Mono': {
        wght: [400, 500, 600, 700],
        ital: [400, 500, 600, 700],
      },
    },
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