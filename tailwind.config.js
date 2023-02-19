/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {},
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1920px",
    },
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
      height: (theme) => ({
        "screen*90": "90vh",
        "screen*80": "80vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  plugins: [],
};
