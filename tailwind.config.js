/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Suisse Intl", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Nanum Myeongjo", "Garamond", "EB Garamond", "Times New Roman"],
        mono: ["Suisse Intl Mono", "ui-monospace", "SFMono-Regular", "Menlo"],
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
};
