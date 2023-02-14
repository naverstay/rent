/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {

    },
    extend: {
      colors: {
        'rent-red': '#FF493E',
        'rent-yellow': '#F2B348',
        'rent-background': '#FAFCFE',
      },
    },
  },
  plugins: [],
}
