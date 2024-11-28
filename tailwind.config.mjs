/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
			  verdea: '#1ab678', // Tu color personalizado
			  rojo: '#ea4156', // Otro color personalizado
			},
			backgroundImage: {
        'menu-texture': "url('/bg_4.jpg')",
      }
		  },
	},
	plugins: [],
}
