/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        alegreya: ['"Alegreya Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
