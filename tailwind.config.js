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
        'color-White': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'League-Spartan': "League Spartan, sans-serif",
      },
      backgroundImage: {
        'Image-desktop': "url('/images/bg-pattern-top-desktop.svg'), url('/images/bg-pattern-bottom-desktop.svg')",
        'Image-mobile': "url('/images/bg-pattern-top-mobile.svg'), url('/images/bg-pattern-bottom-mobile.svg')",
      },
      backgroundPosition: {
        'Image-position-desktop': 'right 60vw bottom 62vh, left 30vw top 30vh',
        'Image-position-mobile': 'top 0 left 0, right 0 bottom 0',
      }
    },
  },
  plugins: [],
}