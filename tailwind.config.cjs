/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#181818',
        mid: '#7B818A',
        light: '#eef2f7'
      }
    },
  },
  plugins: [],
}
