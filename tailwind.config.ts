import type { Config } from 'tailwindcss';

import fontFamily from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primaryGreen: { DEFAULT: '#96CA2D' },
        primaryOrange: { DEFAULT: '#FFD449' },
        forestGreen: { DEFAULT: '#384D48' },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        gochi: ['var(--font-gochi-hand)', 'cursive'],
      },
    },

    screens: {
      '3xl': '1600px',
      '4xl': '1920px',
      '5xl': '2560px',
      '6xl': '3840px',
      print: { raw: 'print' },
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
    },
  },
  plugins: [],
};

export default config;
