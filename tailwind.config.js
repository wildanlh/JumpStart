/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#232946",
        cyan: "#B8C1EC",
        black: "#040404",
        white: "#F7FDF9",
        cream: "#FCDFAF",
        orange: "#F27A21",
        darkOrange: "#B25917",
        red: "#F25F4C",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
