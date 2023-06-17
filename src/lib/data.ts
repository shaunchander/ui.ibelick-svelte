import TextGradient from '$lib/components/TextGradient.svelte';
import TextAnimatedGradient from '$lib/components/TextAnimatedGradient.svelte';
import TextShine from '$lib/components/TextShine.svelte';
import BackgroundButtonShine from '$lib/components/BackgroundButtonShine.svelte';
import ButtonGradient from '$lib/components/ButtonGradient.svelte';
import ButtonHoverGradient from '$lib/components/ButtonHoverGradient.svelte';
import ButtonBackgroundSpotlight from '$lib/components/ButtonBackgroundSpotlight.svelte';
import ButtonRotatingBackgroundGradient from '$lib/components/ButtonRotatingBackgroundGradient.svelte';
import ButtonShadowGradient from '$lib/components/ButtonShadowGradient.svelte';
import InputGradientBorder from '$lib/components/InputGradientBorder.svelte';
import InputSpotlightBorder from '$lib/components/InputSpotlightBorder.svelte';
import InputPulseBorder from '$lib/components/InputPulseBorder.svelte';
import BadgeAnimatedGradientBorder from '$lib/components/BadgeAnimatedGradientBorder.svelte';
import BadgeShine from '$lib/components/BadgeShine.svelte';
import BadgeTextGradient from '$lib/components/BadgeTextGradient.svelte';
import CardAnimatedBorderGradient from '$lib/components/CardAnimatedBorderGradient.svelte';
import CardSpotlight from '$lib/components/CardSpotlight.svelte';
import CardPulseBorder from '$lib/components/CardPulseBorder.svelte';

const twConfig = {
	['text-gradient']: {
		animation: {
			'text-gradient': 'text-gradient 1.5s linear infinite'
		},
		keyframes: {
			'text-gradient': {
				to: {
					backgroundPosition: '200% center'
				}
			}
		}
	},
	['background-shine']: {
		animation: {
			'background-shine': 'background-shine 2s linear infinite'
		},
		keyframes: {
			'background-shine': {
				from: { backgroundPosition: '0 0' },
				to: { backgroundPosition: '-200% 0' }
			}
		}
	},
	['pulse-slow']: {
		animation: {
			'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)'
		}
	},
	['border-width']: {
		animation: {
			'border-width': 'border-width 3s infinite alternate'
		},
		keyframes: {
			'border-width': {
				from: { width: '10px', opacity: '0' },
				to: { width: '100px', opacity: '1' }
			}
		}
	}
};

export const components = [
	{
		name: 'Text Gradient',
		component: TextGradient,
		slug: 'text-gradient'
	},
	{
		name: 'Text Animated Gradient',
		component: TextAnimatedGradient,
		slug: 'text-animated-gradient',
		twConfig: twConfig['text-gradient']
	},
	{
		name: 'Text Shine',
		component: TextShine,
		slug: 'text-shine',
		twConfig: twConfig['background-shine']
	},
	{
		name: 'Background Button Shine',
		component: BackgroundButtonShine,
		slug: 'background-button-shine',
		twConfig: twConfig['background-shine']
	},
	{
		name: 'Button Gradient',
		component: ButtonGradient,
		slug: 'button-gradient'
	},
	{
		name: 'Button Hover Gradient',
		component: ButtonHoverGradient,
		slug: 'button-hover-gradient'
	},
	{
		name: 'Button Background Shine',
		component: ButtonBackgroundSpotlight,
		slug: 'button-background-shine'
	},
	{
		name: 'Button Rotating Background Gradient',
		component: ButtonRotatingBackgroundGradient,
		slug: 'button-rotating-background-gradient'
	},
	{
		name: 'Button Shadow Gradient',
		component: ButtonShadowGradient,
		slug: 'button-shadow-gradient'
	},
	{
		name: 'Input Gradient Border',
		component: InputGradientBorder,
		slug: 'input-gradient-border'
	},
	{
		name: 'Input Spotlight Border',
		component: InputSpotlightBorder,
		slug: 'input-spotlight-border'
	},
	{
		name: 'Input Pulse Border',
		component: InputPulseBorder,
		slug: 'input-pulse-border',
		twConfig: twConfig['pulse-slow']
	},
	{
		name: 'Badge Animated Gradient Border',
		component: BadgeAnimatedGradientBorder,
		slug: 'badge-animated-gradient-border'
	},
	{
		name: 'Badge Shine',
		component: BadgeShine,
		slug: 'badge-shine',
		twConfig: twConfig['background-shine']
	},
	{
		name: 'Badge Text Gradient',
		component: BadgeTextGradient,
		slug: 'badge-text-gradient'
	},
	{
		name: 'Card Animated Border Gradient',
		component: CardAnimatedBorderGradient,
		slug: 'card-animated-border-gradient'
	},
	{
		name: 'Card Spotlight',
		component: CardSpotlight,
		slug: 'card-spotlight'
	},
	{
		name: 'Card Pulse Border',
		component: CardPulseBorder,
		slug: 'card-pulse-border',
		twConfig: twConfig['pulse-slow']
	}
];
