/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand lemon-gold — sampled to match the logo
        gold: {
          50:  '#fffdf0',
          100: '#fef8cc',
          200: '#fdee94',
          300: '#fbdf52',
          400: '#f7d130',
          500: '#f2c40d',
          600: '#d9a800',
          700: '#a87f06',
          800: '#82620b',
          900: '#5f480c',
        },
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
          900: '#202020',
          950: '#161616',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out forwards',
        'slide-up':    'slideUp 0.6s ease-out forwards',
        'float':       'float 3s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d9a800 0%, #f2c40d 50%, #f7d130 100%)',
        'gold-shimmer':  'linear-gradient(90deg, #d9a800 0%, #fbdf52 50%, #d9a800 100%)',
      },
    },
  },
  plugins: [],
};
