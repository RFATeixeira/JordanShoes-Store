/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: "#7ca2f4",
        branddark: "#121214",
        brandgray: "#f3f7ff",
        brandwhite: "#ffffff",
      },
      spacing: {
        480: "480px",
        360: "360px",
        520: "520px",
        1216: "1216px",
        593: "340px",
        700: "700px",
        28: "28em",
        26: "26em",
        1100: "1100px",
        900: "900px",
        770: "770px",
        2444: "30em",
        600: "600px",
        380: "380px",
        730: "730px",
      },
      fontSize: {
        32: "26px",
        20: "20px",
      },
    },
  },
  plugins: [plugin(function ({ theme }) {})],
};
