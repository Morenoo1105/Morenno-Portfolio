/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#161719",
        primaryText: "#f9f1df",
        "primary-50": "#161719BF",
        secondary: "#FFC86B",
        tertiary: "#3a3023",
      },
      fontFamily: {
        garamond: ["EB_Garamond"],
        poiret: ["Poiret One"],
      },
      screens: {
        xs: "450px",
      },
      animation: {
        blink: "blink 1s linear infinite",
      },
      boxShadow: {
        underShadow: "0 3px 0 #FFC86B",
        underShadowHide: "0 0 0 #FFC86B",
      },
    },
  },
  plugins: [],
};
