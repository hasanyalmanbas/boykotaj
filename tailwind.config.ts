import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({theme}) => ({
       
      }),
      backgroundImage: ({ theme }) => ({
        "palestine": `linear-gradient(to right, #E4312b, #FFFFFF, #149954)`,
        "palestine-dark": `linear-gradient(to right, #E4312b, #000000, #149954)`,
        "turkistan": `linear-gradient(to right, #559EE2, #FFFFFF)`,
        "turkistan-dark": `linear-gradient(to right, #559EE2, #000000)`,
      }),
      /* backgroundImage: ({ theme }) => ({
        "palestine": `linear-gradient(to right, #E4312b, #FFFFFF, #149954)`,
        "palestine-dark": `linear-gradient(to right, #E4312b, #000000, #149954)`,
        "turkistan": `linear-gradient(to right, #559EE2, #FFFFFF)`,
        "turkistan-dark": `linear-gradient(to right, #559EE2, #000000)`,
      }), */
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
