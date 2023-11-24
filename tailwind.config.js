/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightBg: "#FCF9F2",
        primary: "#161719",
        primaryText: "#f9f1df",
        secondary: "#FFC86B",
        tertiary: "#3a3023",
      },
      fontFamily: {
        garamond: ["EB Garamond"],
        poiret: ["Poiret One"],
        comfortaa: ["Comfortaa"],
      },
      screens: {
        xs: "450px",
      },
      boxShadow: {
        underShadow: "0 3px 0 #FFC86B",
        underShadowHide: "0 0 0 #FFC86B",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
