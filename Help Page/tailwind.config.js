/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      kode: ['Kode Mono', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
      madimi: ['Madimi One', 'sans-serif'],
    },
    extend: {
      colors: {
        bodybg: '#f8f9fa',
        lightpurple: '#9376E0',
        navbg: '#dee2ff',
        navhoverfill: '#DEE2E6'
      },
    },
  },
  safelist: [
    'bg-lightpurple',
    'fill-navhoverfill',
    'fill-lightpurple',
  ],
  plugins: [],
}

