/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/*.{js,html}',
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}