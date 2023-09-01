/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'red',
        gray: '#d9d9d9',
        dark: {
          DEFAULT: '#3A3A3A'
        }
      }
    }
  },
  plugins: []
}
