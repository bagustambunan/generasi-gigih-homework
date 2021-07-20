module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          sptf: '#1ED760',
          sptf_black: '#000000',
          sptf_dark_main: '#0E0E0E',
          sptf_card: '#2B2B2B',
          sptf_card_hover: '#383838',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }