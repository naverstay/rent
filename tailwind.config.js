/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1920px",
      // => @media (min-width: 1536px) { ... }

      // Original
      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }
      //
      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }
      //
      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }
      //
      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }
      //
      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "20px",

      // default breakpoints but with 40px removed
      screens: {
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        "rent-red": "#ff493e",
        "rent-yellow": "#f2b348",
        "rent-background": "#fafcfe",
        "rent-primary": "#f2b348",
        "rent-blue": "#3e8bff",
        "rent-black": "#2F2F2F",
        "rent-dark-grey": "#a7aaac",
        "rent-grey": "#dbdbdb",
        "rent-light-grey": "#e8eff4",
        "rent-light-h": "#333333",
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      letterSpacing: {
        0: "0em",
        1: "0.01em",
        2: "0.02em",
        3: "0.03em",
        4: "0.04em",
        5: "0.05em",
        6: "0.06em",
        7: "0.07em",
        8: "0.08em",
      },
      lineHeight: {
        100: "100%",
        110: "110%",
        115: "115%",
        120: "120%",
        125: "125%",
        130: "130%",
        140: "140%",
        150: "150%",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        header: "0 0 30px 30px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
      height: (theme) => ({
        "screen*90": "90vh",
        "screen*80": "80vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        "screen*90": "90vw",
        "screen*80": "80vw",
        "screen/2": "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
