/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: {
          DEFAULT: '#FFBF1F',
          100: '#FFBA0A',
          200: '#F5AF00',
        },
      },
    },
  },
  plugins: [],
};
