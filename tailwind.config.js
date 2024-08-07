/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: '#f72585',
        customBlue: '#00b4d8',
        customOrange: '#fb8500'
      },
    },
  },
  plugins: [],
};

