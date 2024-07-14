import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-wave": "url('/images/blue202bg.png')",
        "blue-wave-mobile": "url('/images/blue202backmobile.png')",
        "blue-swirl": "url('/images/blue-swirl.png')",
        "blue-abstract": "url('/images/blue-abstract-simple.svg')",
        "right-arrow": "url('/icons/right-arrow-grey.svg')",
        "people-computer": "url('/images/people-computer.jpg')",
        "ups-truck": "url('/images/ups-truck.jpg')",
        "people-table": "url('/images/people-table.jpg')",
        steak: "url('/images/madie-hamilton-dZ-HI4EuWcA-unsplash.jpg')",
        logistics: "url('/images/logistics.jpg')",
        "people-group": "url('/images/people-group.jpg')",
        ekh: "url('/images/ekh.jpg')",
      },

      colors: {
        "blue-accent": "#293FFF",
      },
    },
    fontFamily: {
      default: defaultTheme.fontFamily.sans,
      "body-sans": ["var(--font-source-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-roboto-mono)", ...defaultTheme.fontFamily.mono],
    },
    transitionProperty: {
      width: "width",
      "max-height": "max-height",
      "max-width": "max-width",
    },
  },
  plugins: [],
};
export default config;
