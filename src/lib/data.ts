import TextGradient from '$lib/components/TextGradient.svelte';
import TextAnimatedGradient from '$lib/components/TextAnimatedGradient.svelte';
import TextShine from '$lib/components/TextShine.svelte';

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
		type: 'text'
	},
	{
		name: 'Text Shine',
		component: TextShine,
		slug: 'text-shine',
		type: 'text'
	}
];
