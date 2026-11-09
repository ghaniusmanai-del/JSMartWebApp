/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#22C55E',
          'green-dark': '#16A34A',
          'green-light': '#EBFBF3',
          'green-border': '#D1F4DE',
          'green-pill': '#22C55E',
          navy: '#0E1726',
          sidebar: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
