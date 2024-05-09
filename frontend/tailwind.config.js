const { Dosis } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mycolour: 'rgba(255,255,255,.25)',
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        teachers: ['Teachers', 'sans-serif'],
        jaro: ['Jaro', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
