import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#7E1323',
          dark: '#5c0e19',
          light: '#9d1a2c',
        },
        gold: {
          DEFAULT: '#B38A4D',
          light: '#c9a366',
          muted: '#9a7640',
        },
        ivory: {
          DEFAULT: '#F7F3EC',
          dark: '#ede9e0',
        },
        charcoal: {
          DEFAULT: '#1D1F1F',
          light: '#3a3c3c',
        },
        canvas: '#d4c9b4',
        terracotta: '#c17b5a',
        'warm-white': '#FDFAF6',
        'soft-brown': '#8B6B4E',
        'muted-olive': '#6b6b4f',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        ui: ['Jost', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
