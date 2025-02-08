/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		colors: {
        accent: {
  				DEFAULT: '#00478f',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
        baseline: {
  				'1': '#433E3F',
  				'2': '#151314'
  			},
  			typo: '#575757',
  			bold: '#003366',
  			primaryShades: {
  				'100': '#d6ebff',
  				'200': '#add6ff',
  				'300': '#85c2ff',
  				'400': '#5cadff',
  				'500': '#3399ff',
  				'600': '#0a85ff',
  				'700': '#0070e0',
  				'800': '#005cb8',
  				'900': '#00478f',
  				'1000': '#00264c'
  			},
  			fontFamily: {
  				montserrat: [
  					'Montserrat',
  					'sans-serif'
  				]
  			},
  			secondary: {
  				'1': '#637D92',
  				'2': '#1A7499',
  				'3': '#323F49',
  				'4': '#0F4257',
  				'5': '#333333',
  				'9': '#AAB9C5',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			pink: '#EF4387',
  			blut: '#0066CC',
  			faq: {
  				'1': '#214570',
  				'2': '#E6EEF8'
  			},
  			cardbg: '#B6B5B4',
  			banner: '#183251',
  			footer: '#F5FAFF',
  			light: '#FAFAFA',
  			default: '#004589',
  			dark: '#2B2829',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
