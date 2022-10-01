/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/styles/assets/bg/home.png')",
        'dashboard': "url('/src/styles/assets/bg/page.png')",
        'signup': "url('/src/styles/assets/bg/signup.png')",
      },
      boxShadow: {
        'goalBtn': '0px 1px 10px 1px rgba(255,160,0,0.5)',
      },
      colors: {
        'header': "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7822479333530288) 88%, rgba(255,255,255,0) 100%)",
      },
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'], 
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
  variants: {
    scrollbar: ['rounded']
  },
}
