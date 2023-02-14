/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {},
    extend: {
      colors: {
        "rent-red": "#FF493E",
        "rent-yellow": "#F2B348",
        "rent-background": "#FAFCFE",
        "rent-primary": "#F2B348",
        "rent-blue": "#3E8BFF",
        "rent-black": "#black",
        "rent-dark-grey": "#A7AAAC",
        "rent-grey": "#DBDBDB",
        "rent-light-grey": "#E8EFF4",
      },
    },
  },
  plugins: [],
};
