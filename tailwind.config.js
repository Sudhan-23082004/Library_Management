


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(85 81 227)',
        'secondary' : '#2b2d77',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },

      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite"
      }
    },
    fontFamily : {
      'hero-font' : 'Protest Revolution',
      'another-font' : 'Quicksand',
      'Acme': 'Acme',
    }
  },
  plugins: [],
}