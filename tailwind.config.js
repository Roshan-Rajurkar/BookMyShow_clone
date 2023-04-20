/* @type {import('tailwind_css').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        navCol:

        {
          50: '#f0eeff',
          100: '#d3cfe7',
          200: '#2B3148',
          300: '#988ebd',
          400: '#7b6eaa',
          500: '#615490',
          600: '#4c4271',
          700: '#362f52',
          800: '#201c33',
          900: '#0c0717',
        }
        ,
        iconCol:

        {
          50: '#feeff2',
          100: '#ded7d9',
          200: '#c2bebf',
          300: '#a7a5a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#5a5959',
          700: '#423f40',
          800: '#2a2526',
          900: '#17080d',
        }

      }
    },
  },

  variants: {
    extends: {},
  }, plugins: [],

}