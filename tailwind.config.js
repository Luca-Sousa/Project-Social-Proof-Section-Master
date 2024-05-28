const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'color-Very-Dark-Magenta': 'hsl(300, 43%, 22%)',
        'color-Soft-Pink': 'hsl(333, 80%, 67%)',
        'color-Dark-Grayish-Magenta': 'hsl(303, 10%, 53%)',
        'color-Light-Grayish-Magenta': 'hsl(300, 24%, 96%)',
        'color-White': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'League-Spartan': "League Spartan, sans-serif"
      },
      backgroundImage: {
        'pattern-top-mobile': "url('./images/bg-pattern-top-mobile.svg')",
        'pattern-bottom-mobile': "url('./images/bg-pattern-bottom-mobile.svg')",
        'pattern-top-desktop': "url('./images/bg-pattern-top-desktop.svg')",
        'pattern-bottom-desktop': "url('./images/bg-pattern-bottom-desktop.svg')"
      }
    },
  },
  plugins: [],
}