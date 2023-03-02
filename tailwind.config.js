/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bdaf49'
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease forwards',
        fadeSlowIn: 'fadeIn 2s ease forwards',
        fadeOut: 'fadeOut 0.3s ease',
        fade: 'fade 3s ease forwards',
        leftEntry: 'leftEntry 0.75s ease forwards',

      },
      keyframes: {
        fadeIn: {
          '0%': {transform: 'scale(0);'},
          '100%': {transform: 'scale(1);'}
        },
        fadeOut: {
          '0%': {transform: 'scale(1);'},
          '100%': {transform: 'scale(0);'}
        },
        fade: {
          '0%': {opacity: '0;'},
          '100%': {opacity: '1;'}
        },
        leftEntry: {
          '0%': {transform: 'translateX(-500px);'},
          '100%': {transform: 'translateX(0px);'}
        },
      }
    },
  },
  plugins: [],
}
