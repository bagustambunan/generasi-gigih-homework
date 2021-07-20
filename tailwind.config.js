module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          sptf: '#1ED760',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }