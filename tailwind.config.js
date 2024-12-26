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
              primaryShades: {
                100: '#d6ebff',
                200: '#add6ff',
                300: '#85c2ff',
                400: '#5cadff',
                500: '#3399ff',
                600: '#0a85ff',
                700: '#0070e0',
                800: '#005cb8',
                900: '#00478f',
                1000: '#00264c',
              },
              fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
              },
              secondary: {
                 
                  1: "#637D92",
                  2: "#1A7499",
                  3: "#323F49",
                  4: "#0F4257",
                  5: "#333333",
                  9:'#AAB9C5'
              },
              pink:"#EF4387",
              blut:"#0066CC",
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
