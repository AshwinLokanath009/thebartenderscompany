/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand lemon — 500 is sampled straight from the logo artwork (#f6de26).
        lemon: {
          50:  '#fffef0',
          100: '#fefbc8',
          200: '#fdf48d',
          300: '#faea4e',
          400: '#f8e238',
          500: '#f6de26',
          600: '#e0c40a',
          700: '#b08f06',
          800: '#8a6f0b',
          900: '#5f4c0c',
        },
        // Warm off-whites — the page's dominant surface.
        cream: {
          50:  '#fffdf7',
          100: '#fdfaf0',
        },
        // Logo ink is near-black (#060606), not a soft grey.
        charcoal: {
          50:  '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
