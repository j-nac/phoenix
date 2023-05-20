/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'pink': '#cc4365',
      'magenta': '#872e62',
      'purple': '#552bab',
      'black': '#09070f',
      'off-black': '#050306',
      'high-black': '#1e0436',
      'black-glass': 'rgba(9,7,15,.5)',
      'white': '#f9f7f1',
      'gray': '#959096',
      'transparent': 'rgba(0,0,0,0)',
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
        'slide-menu': 'calc(600px - 60px)',
      },
      height: {
        'screen-menu': 'calc(100vh - 60px)',
        'menu': '60px',
      },
    },
  },
  plugins: [],
}

