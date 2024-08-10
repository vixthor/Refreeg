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
              bold: "#003366",
              secondary: {
                  1: "#637D92",
                  2: "#1A7499"
              },
              light: "#EFF4FB",
              DEFAULT: "#F3F4F6",
              dark: "#1A202C",
          },
    },
  },
  plugins: [],
};
