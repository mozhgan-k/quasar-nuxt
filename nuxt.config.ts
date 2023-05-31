// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
      },
    },
  },
  modules: ['nuxt-quasar-ui'],
  postcss: {
    plugins: {
      'postcss-rtlcss': {},
    },
  },
  quasar: {
    extras: {
      fontIcons: ['material-icons']
    },
    lang: 'fa-IR',
  }
})
