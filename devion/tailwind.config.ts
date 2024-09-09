import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "1140px",
        "2xl": "1396px",
      },
    },
    backgroundImage: {
      "footer-shape": "url('/footer-shape.png')",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      "primary-color": "#FF817B",
      "secondary-color": "#842FFB",
      "primary-text-color": "#1F1233",
      "secondary-text-color": "#7A6899",
    },

    extend: {},
  },
  plugins: [],
});
export default config;
