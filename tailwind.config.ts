/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',

  content: [
    "./app/**/*.tsx",
    "./app/**/*.ts",
    "./pages/**/*.tsx",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ffdb4d",
        gray: "#747474",
        crimson: "#DC143C",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // You can add other font families similarly
        // serif: ['Georgia', 'serif'],
        // mono: ['Menlo', 'monospace'],
      },
      screens:{
        sxl:"1180px",
        xs: "480px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
