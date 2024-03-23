/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'playfair-display': ["Playfair Display", 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#111',
        secondary: '#555',
        bg: {
          secondary: '#EEE',
          disabled: '#eeeeee'
        },
        section: {
          bg: '#f8fafc'
        },
        text: {
          secondary: '#999',
        },
        foreground: '#fff',
        destructive: '#d92b2b',
        backgroundImage: {
          'pIcon': "url('../public/test.jpg')",
        }
      },
    },
  },
  plugins: [],
}

