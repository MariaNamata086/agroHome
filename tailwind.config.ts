import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: { DEFAULT: '#96CA2D' },
        primaryOrange: { DEFAULT: '#FFD449' },
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
