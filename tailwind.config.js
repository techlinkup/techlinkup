/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage:{ 
        banner1: "url(/src/assets/hero.jpg)",
        banner2: "url(/src/assets/requirebg.jpg)"
      },
      colors: {
        greenLogo: "#04775a",
        greenLogoHover: "#035440",
        yellowLogo: "#fbcd00",
      }
    },
  },
  plugins: [],
}
