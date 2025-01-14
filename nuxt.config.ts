// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    rootTag: 'main',
  },
  css: ['@picocss/pico/css/pico.classless.amber.css'],
})
