/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobil': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    
      
    },
  },
  plugins: [],
}