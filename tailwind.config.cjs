/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'text-gradient': 'text-gradient 1.5s linear infinite',
				'background-shine': 'background-shine 2s linear infinite',
				'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
				'border-width': 'border-width 3s infinite alternate'
			},
			keyframes: {
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},
				'background-shine': {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				'border-width': {
					from: { width: '10px', opacity: '0' },
					to: { width: '100px', opacity: '1' }
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
