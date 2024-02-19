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
        dark: "#181414",
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // You can add other font families similarly
        // serif: ['Georgia', 'serif'],
        // mono: ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
