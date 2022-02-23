const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem"
      },
      maxWidth: {
        'grid': '1080px'
      },
      screens: {
        "xsm": "300px"
      }
    },
  },
  plugins: [],
}