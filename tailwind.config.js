/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      "playfair-display": ["Playfair Display", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        nav: "width, left",
      },
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#111",
        secondary: "#555",
        bg: {
          secondary: "#EEE",
        },
        text: {
          secondary: "#999",
        },
      },
    },
  },
  plugins: [],
};
