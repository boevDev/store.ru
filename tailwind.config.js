/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFF',
      black: '#0F0F0F',
      primary: '#AEDEFC',
      error: '#DC0533',
      grey: '#909090',
      gray: {
        1: '#9ca3af',
        2: '#111827',
        3: '#4e5254',
        4: '#9fa6ab',
      },
      pink: {
        1: '#FFF6F6',
        2: '#FFDFDF',
        3: '#F875AA',
        4: 'rgb(255, 246, 246, 0.5)',
      },
      bgOpacity: 'rgb(15, 15, 15, 0.5)',
      whiteOpacity: 'rgb(255,255,255, 0.5)',
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
