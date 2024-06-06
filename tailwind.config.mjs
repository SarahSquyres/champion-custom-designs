/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 100s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {

				  '0': {
					transform: 'translate3d(0, 0, 0)',
				  },
				  '100%': {
					transform: 'translate3d(-300%, 0, 0)',
				  },
				},
			  },
		},
	},
	plugins: [
		require('daisyui'),
	],
}
