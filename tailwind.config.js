/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "primary":"#17334E",
        "secondary":"#6EABD1",
        "tertiary":"#D2D3D5",
      },
    },
  },
  plugins: [],
}

