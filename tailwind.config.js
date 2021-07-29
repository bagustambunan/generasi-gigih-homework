module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        me_primary: '#72BEEF',
        me_main: '#F0F0F0',
        me_card: '#FFFFFF',
        me_card_hover: '#F8F8F8',

        me_dark: '#18191A',
        me_dark_half: '#3A3B3B',
        me_dark_quarter: '#5C5C5C',
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}