/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
    },
    extend: {
      screens:{
        'mobilexs': '320px',
        'mobilem': '375px',
        'mobileL': '425px',
        'laptop': '1024px',
        'laptopL':'1440px',
        '3xl': '1600px',
        'desktop': '1920px',
        '4k': '2500px',
      }
    },
  },
  plugins: [],
}