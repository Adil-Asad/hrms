/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      poppins: "'Poppins', sans-serif",
      barlow: "'Barlow', sans-serif",
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#ECBE13", // primary color
        secondary: "#F2D15A", // Secondary color
        tritary: "#F7E5A1", // disable color
        highlight: "#FDF8E7", // background highlight
        slate: "#EFEFEF", //background color
        text: "#565551", //text body
        subheading: "#41403C", //subheading
        accent: "#23221E", // text
        dim: "#80807D", // light text
        disable: "#D0D5DD", // disabled text
        error: "#F04438", // error messages
        dull: "#FAF9F8", // background
        light: "#E8E8E8",
        milk: "#FAF9F8", //background
        cloud: "#F1F2F4", //backgound
        grayish: "#E3E8E4 ", //background
        lightbackground: "#F4F4F4", // background
        grass: {
          100: "#499784",
          300: "#968943",
          400: "#738C79"
        },
      },
    },
  },
  plugins: [],
});
