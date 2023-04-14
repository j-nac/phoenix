/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'pink': '#cc4365',
      'magenta': '#872e62',
      'purple': '#42195e',
      'black': '#09070f',
      'black-glass': 'rgba(9,7,15,.75)',
      'white': '#f9f7f1',
    },
    fontFamily: {
      'heading': ['Bebas Neue', 'cursive'],
      'paragraph': ['Barlow', 'sans-serif'],
    },
    extend: {
      minWidth: {
        'slide': '600px',
        'menu': '400px',
      },
      minHeight: {
        'slide': '600px',
      },
    },
  },
  plugins: [],
}

