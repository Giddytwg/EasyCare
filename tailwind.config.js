/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#093C6E',
        bgdarkblue: '#E6F0FB',
        bgsoftblue: '#E6F0FB',
        bglightBlue: '#F8FBFF',
        bordergray: '#DFE8F5'
      },
     
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
        comorant: ['Comorant', 'sans-serif']
      },
      animation: {
        'my-spin': 'spin 1.5s linear infinite'
      }
    },
  },
  plugins: [],
}

