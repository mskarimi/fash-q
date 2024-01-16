import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  important: true,
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        sm: "576px",
        md: "768px",
        lg: "900px",
        xl: "1200px",
      },
      fontFamily: {
        IranSans: ["var(--font-iransans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#2bac5f",
        textPrimary: "#252a3c",
        secondary: "#00AACD",
        mainBg: "#FAFAFA",
      },
      spacing: {
        screenSpace: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
