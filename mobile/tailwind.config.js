/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'sans-serif'],
        'rubik-bold': ['Rubik-Bold', 'sans-serif'],
        'rubik-extrabold': ['Rubik-ExtraBold', 'sans-serif'],
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
        'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
        'rubik-light': ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: {
          DEFAULT: '#FFBA0A',
          100: '#FFC533',
          200: '#FFD15C',
        },
        green: {
          DEFAULT: '#38B000',
        },
        blue: {
          DEFAULT: '#2176ff',
        },
        accent: {
          100: '#FFBA0A',
        },
        danger: '#F75555',
      },
    },
  },
  plugins: [],
};
