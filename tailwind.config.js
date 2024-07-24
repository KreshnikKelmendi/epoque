/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Alicante', 'sans'],
        custom1: ['Alingkar', 'sans'],
      },
    },
  },
  plugins: [],
}