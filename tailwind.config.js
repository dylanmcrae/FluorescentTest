module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      '1d': '#1D1D1D',
      'f1': '#F1F1F1',
      'de': "#DEDEDE"
    }
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
