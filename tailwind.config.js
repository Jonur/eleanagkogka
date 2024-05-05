/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-blue': '#394F71',
      teal: {
        dark: '#5992AA',
        light: '#7DC1CA',
      },
      pink: '#DF859B',
      coral: '#F2A4A7',
      mustard: '#DEBE7E',
      purple: '#BBA9E4',
      brown: '#BB9F8F',
      'light-grey': '#E5E5EC',
      line: '#111113',
      white: '#FBFBFB',
      'dark-mode-header': '#354356',
      'dark-mode-body': '#2A3649',
      'dark-mode-link': '#91E3EE',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        alegreya: ['"Alegreya Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
