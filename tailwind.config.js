const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-primary': '#21aa74',
        'c-secondary': '#29a0d8',
        'c-text': '#706f6f',
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
})

