module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sptf: '#1ED760',
        sptf_black: '#000000',
        sptf_dark_main: '#18191A',
        sptf_card: '#242526',
        sptf_card_hover: '#3A3B3C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}