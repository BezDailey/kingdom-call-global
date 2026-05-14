/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D1B5C', // kc-navy
        primarylight: '#1A2A72', // kc-navy-mid
        primarytext: '#2A2A2A', // kc-text-body
        accent: '#F5E4B0', // kc-gold-pale
        accentdark: '#C8981A', // kc-gold
        light: '#F7F4ED', // kc-off-white
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
