import colors from './src/config/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors
      },
      animation: {
        'show-fade-in': 'show-fade-in 0.3s ease-out'
      },
      keyframes: {
        'show-fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(5px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
}
