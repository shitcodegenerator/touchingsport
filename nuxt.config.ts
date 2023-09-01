// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  build: {},
  modules: [
    '@nuxthq/ui',
    'vue3-carousel-nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto Sans TC': true,
          'Bebas Neue': true
        }
      }
    ]
  ],
  carousel: {
    prefix: 'Vue'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    preference: 'light'
  },

  // plugins: [{ src: '~/plugins/v-calendar.ts', mode: 'client' }],
  css: ['@/assets/css/main.css']
})
