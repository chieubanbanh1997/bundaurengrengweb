/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('Assets/Images/icon-bg.png')",
      },
    },
    fontFamily: {
      LHanoienne: ["LHanoienne", "Sans-serif"],
      Montser: ["Montser", "Sans-serif"],
      ...fontFamily,
    },
  },

  plugins: [],
};
