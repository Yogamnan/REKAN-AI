/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#5B59E8',
        customWhite: '#FFFFFF',
        customBlack: '#212121',
        customRed: '#DC0168',
        customGrey: 'rgba(212, 218, 228, 0.12)'
      }
    },
  },
  plugins: [],
};