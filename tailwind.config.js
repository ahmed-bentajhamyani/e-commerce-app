/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      primary: '#111',
      secondary: '#555',
      'bg-color': '#EEE',
    },
    extend: {},
  },
  plugins: [],
}

