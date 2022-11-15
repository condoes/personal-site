/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
        playfair: ["PlayfairDisplay"]
      },
      colors: {
        babyblue: "#D1E0FF",
        lightpink: "#FFCFF2",
        cream: "#F5ECEC",
        purple: "#8794C7",
        sand: "#E3D9D1",
        darkgray: "#7B7B7B",
        darkblue: "#66738C"
      },
      dropShadow: {
        black: "6px 4px 5px rgba(0,0,0, .35)",
        sharpblack: "6px 6px 2px rgba(0,0,0, .25)"
      }
    }
  },
  plugins: []
};
