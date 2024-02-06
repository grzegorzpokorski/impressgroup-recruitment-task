import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1410px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange1: "rgb(var(--orange-1))",
        orange2: "rgb(var(--orange-2))",
        yellow: "rgb(var(--yellow)",
        gray1: "rgb(var(--gray-1))",
        gray2: "rgb(var(--gray-2))",
        gray3: "rgb(var(--gray-3))",
        gray5: "rgb(var(--gray-5))",
      },
      spacing: {
        17.5: "70px",
      },
      borderRadius: {
        10: "10px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        box: "0px 0px 15px rgba(var(--orange-2), 0.52)",
      },
    },
  },
  plugins: [],
} satisfies Config;
