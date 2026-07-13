/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d4a017',
          700: '#b7860d',
          800: '#926c0a',
          900: '#78530a',
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
          900: '#111111',
          950: '#080808',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
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
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f59e0b 50%, #d4a017 100%)',
        'gold-shimmer':  'linear-gradient(90deg, #d4a017 0%, #fcd34d 50%, #d4a017 100%)',
      },
    },
  },
  plugins: [],
};
