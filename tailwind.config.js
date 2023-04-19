/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto']
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      scrollbarGutter: {
        'stable':'stable',
      },
      overflowBehaviorY:{
        'auto':'auto',
      },
    },
  },
  variants: {},
  plugins: [],
}

