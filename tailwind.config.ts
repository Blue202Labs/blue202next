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
        "mockup-3d": "url('/images/mobile-mockup.png')",
        "people-table": "url('/images/people-table.jpg')",
        sahily: "url('/images/sahily-mockup-table.png')",
        ticketeer: "url('/images/ticketeer/ticketeer-hero-image.png')",
        steak: "url('/images/madie-hamilton-dZ-HI4EuWcA-unsplash.jpg')",
        logistics: "url('/images/logistics.jpg')",
        "people-group": "url('/images/people-group.jpg')",
        ekh: "url('/images/ekh.jpg')",
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
        shimmer: "shimmer 8s infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      boxShadow: {
        blurred: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        "blue-accent": "#293FFF",
      },
    },
    fontFamily: {
      default: defaultTheme.fontFamily.sans,
      "body-sans": [
        "var(--font-plus-jakarta-sans)",
        ...defaultTheme.fontFamily.sans,
      ],
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
