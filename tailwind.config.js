import { nextui } from "@nextui-org/react";
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      zinc: colors.zinc,
      black: colors.black,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.sky,
      rose: colors.rose,
    },
    extend: {
      backgroundImage: {
        "blob-haikei": "url('/blob-haikei-2.svg')",
        "diagonal-background":
          "linear-gradient(90deg, rgba(219,39,119,1), rgba(236,72,153,1), rgba(244,114,182,1))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#ec4899",
            },
            primary: "#0284c7",
          },
        },
        light: {
          colors: {
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#ec4899",
            },
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#0284c7",
            },
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
