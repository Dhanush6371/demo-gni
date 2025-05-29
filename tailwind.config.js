/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f4fa',
          100: '#dae4f2',
          200: '#b8c9e4',
          300: '#8da4d1',
          400: '#6580be',
          500: '#4961aa',
          600: '#394a8c',
          700: '#2d3a6f',
          800: '#213058',
          900: '#1F5AAA', // Updated primary navy blue
          950: '#1F5AAA',
        },
        yellow: {
          400: '#ffd866',
          500: '#d4af37', // Updated warm gold
        },
      },
      fontFamily: {
      sans: ['Mulish', 'sans-serif'],
        serif: ['Mulish', 'serif'],
    },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};