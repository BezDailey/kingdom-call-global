/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00425F', // deep blue
        primarylight: '#006981',
        primarytext: '#394955', // greyish
        accent: '#F6F2CB', // gold
        accentdark: '#BDBA95',
        light: '#F1F5F9', // light grey
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
