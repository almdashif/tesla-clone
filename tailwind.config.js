/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham', 'Arial', 'sans-serif'],
      },
      colors: {
        tesla: {
          blue: '#3E6AE1',
          dark: '#171A20',
          gray: '#393C41',
          lightgray: '#5C5E62',
          border: '#D0D1D2',
        }
      },
    },
  },
  plugins: [],
}
