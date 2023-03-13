/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue" :"#7993EE",
        "dark-blue": "#252B42",
        "gray-text" : "#737373",
        "gray-bg" : "#FAFAFA",
        "gray-border": "#E8E8E8",
        "gray-input-bg" : "#F9F9F9",
        "line-blue": "#364067",
        "footer-gray" : "#BDBDBD",
        "light-blue" : "#eff6ff"
      },
    },
  },
  plugins: [],
}