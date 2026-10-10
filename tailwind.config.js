/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#060514',
          900: '#0c0a24',
          800: '#17143c',
          700: '#231e54'
        },
        gold: {
          light: '#f9ecc8',
          DEFAULT: '#e2c88f',
          dark: '#b9832e'
        },
        blush: {
          light: '#fdeef2',
          DEFAULT: '#eeb2c0',
          dark: '#c96e8c'
        },
        ivory: '#f5eee2'
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      keyframes: {
        'drift-a': {
          '0%, 100%': { transform: 'translate(0) scale(1)' },
          '33%': { transform: 'translate(14vw, 10vh) scale(1.2)' },
          '66%': { transform: 'translate(-10vw, 16vh) scale(0.9)' }
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0) scale(1.1)' },
          '40%': { transform: 'translate(-14vw, -8vh) scale(0.9)' },
          '75%': { transform: 'translate(10vw, -14vh) scale(1.15)' }
        },
        'drift-c': {
          '0%, 100%': { transform: 'translate(0) scale(0.95)' },
          '50%': { transform: 'translate(8vw, -12vh) scale(1.2)' }
        },
        'fall': {
          '0%': { transform: 'translateY(-8vh) rotate(0deg)', opacity: '0' },
          '8%': { opacity: '1' },
          '92%': { opacity: '1' },
          '100%': { transform: 'translateY(112vh) rotate(340deg)', opacity: '0' }
        },
        'sway': {
          '0%, 100%': { transform: 'translateX(-14px)' },
          '50%': { transform: 'translateX(14px)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' }
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.6)' },
          '50%': { opacity: '1', transform: 'scale(1.25)' }
        },
        'hang-sway': {
          '0%, 100%': { transform: 'rotate(-0.9deg)' },
          '50%': { transform: 'rotate(0.9deg)' }
        },
        'lantern-bob': {
          '0%, 100%': { transform: 'translateY(0) rotate(-1.5deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' }
        },
        'arch-glow': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'drift-a': 'drift-a 26s ease-in-out infinite',
        'drift-b': 'drift-b 32s ease-in-out infinite',
        'drift-c': 'drift-c 38s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite alternate',
        'marquee': 'marquee 22s linear infinite',
        'float-soft': 'float-soft 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'twinkle': 'twinkle 2.5s ease-in-out infinite',
        'hang-sway': 'hang-sway 10s ease-in-out infinite',
        'lantern-bob': 'lantern-bob 6s ease-in-out infinite',
        'arch-glow': 'arch-glow 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 28s linear infinite'
      }
    },
  },
  plugins: [],
};
