/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '30px'
    },
    extend: {
      colors: {
        primary: '#0f766e',
        secondary: '#64748b',
        dark: '#0f172a',
      }
    },
  },
  plugins: [],
}

