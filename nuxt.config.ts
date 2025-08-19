// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxt/test-utils',
    '@nuxt/fonts',
  ],
  devtools: {
    enabled: true,
    telemetry: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [
        {
          name: 'google',
          content: 'notranslate',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
      ],
      link: [
        {
          type: 'image/x-icon',
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  css: ['~/assets/styles/reset.css'],
  compatibilityDate: '2025-07-15',
  telemetry: { enabled: false },
  eslint: {
    config: {
      nuxt: { sortConfigKeys: true },
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      preload: true,
      subsets: [
        'latin',
        'cyrillic',
      ],
    },
    families: [
      {
        name: 'Roboto',
        display: 'swap',
        provider: 'google',
        weights: [
          300,
          400,
          500,
          700,
        ],
      },
    ],
  },
  stylelint: {
    lintOnStart: false,
    cache: false,
  },
})
