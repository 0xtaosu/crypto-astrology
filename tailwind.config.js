/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050505',
          light: '#0a0a0a',
        },
        neon: {
          cyan: '#00F0FF',
          purple: '#BC13FE',
          red: '#FF2A2A',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        chinese: ['Ma Shan Zheng', 'cursive'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00F0FF, 0 0 10px #00F0FF' },
          '50%': { boxShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #BC13FE' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
