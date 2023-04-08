/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'3xs': "320px",
			'2xs': "375px",
			'xs': "425px",
			'sm': "640px",
			'md': "768px",
			'lg': "996px",
			'xl': "1024px",
			'2xl': "1280px",
			'3xl': "1366px",
			'4xl': "1440px",
			'5xl': "1536px"
		},
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"]
			},
			container: {
				center: true,
				padding: {
					'3xs': "0.75rem",
					'2xs': "2rem",
					'xs': "2rem",
					'sm': "2rem",
					'md': "3rem",
					'lg': "3rem",
					'xl': "3rem",
					'2xl': "10rem",
					'3xl': "12rem",
					'4xl': "12rem",
					'5xl': "16rem"
				}
			}
		},
	},
	plugins: [
		function ({ addUtilities, theme }) {
			addUtilities({
				".transition-default": {
					transitionProperty: "all",
					transitionDuration: "500ms",
					transitionTimingFunction: theme("ease-in-out"),
				}
			})
		}
	],
}
