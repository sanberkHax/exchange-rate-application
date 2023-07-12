/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0058e9',
        secondary: '#03a9f4',
      },
    },
  },
  plugins: [],
};
