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

        me_dark: '#242526',
        me_dark_half: '#4C4C4D',
        me_dark_quarter: '#737373',
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}