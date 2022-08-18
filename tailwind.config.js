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
    },
    fontFamily: {'lato': ['Lato', 'sans-serif']},
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
  },
}
