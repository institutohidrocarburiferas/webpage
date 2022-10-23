/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease forwards',
        fadeSlowIn: 'fadeIn 1s ease forwards',
        fadeOut: 'fadeOut 0.3s ease'
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'scale(0);' },
          '100%': { transform: 'scale(1);' }
        },
        fadeOut: {
          '0%': { transform: 'scale(1);' },
          '100%': { transform: 'scale(0);' }
        }
      }
    },
  },
  plugins: [],
}
