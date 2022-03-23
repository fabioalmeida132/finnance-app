const colors = require('tailwindcss/colors')

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      bgPrimary: '#EDF0F7',
      primary: {
        100: '#ff041f'
      },
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
