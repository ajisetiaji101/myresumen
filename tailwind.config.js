module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        fredoka: ['Fredoka One'],
        righteous : ['Righteous'],
        varela : ['Varela Round'],
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
