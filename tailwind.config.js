/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Inter','sans-serif'],
      kode: ['Kode Mono', 'sans-serif'],
      poppins: ['Poppins','sans-serif'],
      mont:['Montserrat','sans-serif'],
    }, 
    extend: {
      colors: {
        bodybg: '#f1faee',
        lightpurple: '#cb88fb',
        navbg: '#457b9d',
        navhoverfill: '#1d3557'
      },
    },
  },
  safelist: {

  },
  plugins: [],
}

