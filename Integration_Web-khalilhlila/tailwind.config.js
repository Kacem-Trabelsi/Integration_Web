/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563eb',
        'dark-blue': '#1e40af',
        'light-blue': '#dbeafe',
        'yellow': '#fbbf24',
        'green': '#10b981',
        'light-green': '#d1fae5',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

