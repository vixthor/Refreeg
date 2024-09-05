/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          },
          colors: {
              accent: "#336BAD",
              baseline: {1: "#433E3F", 2: "#151314"},
              typo: "#575757",
              bold: "#003366",
              secondary: {
                  1: "#637D92",
                  2: "#1A7499",
                  3: "#323F49",
                  4: "#0F4257",
                  5: "#333333"
              },
              faq: {1: "#214570", 2: "#E6EEF8"},
              cardbg: "#B6B5B4",
              banner: "#183251",
              footer: "#F5FAFF",
              light: "#FAFAFA",
              default: "#004589",
              dark: "#2B2829",
          },
    },
  },
  plugins: [],
};
