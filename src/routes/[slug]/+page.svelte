<script lang="ts">
	import { components } from '$lib/data';
	import CodeBlock from '$lib/components/base/CodeBlock.svelte';
	import { Somerset } from 'somerset';
	export let data;

	let currentComponent = components.filter((component) => component.slug === data.slug);

	const twConfig = JSON.stringify(currentComponent[0].twConfig, null, 2);

	import ComponentPlayground from '$lib/components/base/ComponentPlayground.svelte';
</script>

<Somerset
	title={`${data.name} | ui.ibelick-svelte`}
	canonical={`https://ui-ibelick-svelte.vercel.app/${data.slug}`}
/>

<div class="mt-10 pb-32">
	<div class="container mx-auto text-white">
		<h1 class="text-md mb-2 font-light text-gray-400">
			{data.name}
		</h1>
		<ComponentPlayground>
			<svelte:component this={currentComponent[0].component} />
		</ComponentPlayground>
		<div class="mt-8">
			<CodeBlock code={data.formattedCode} copy={data.code} />
		</div>
		{#if data.formattedTwConfig}
			<div class="mt-8">
				<CodeBlock
					code={data.formattedTwConfig}
					copy={data.twConfig}
					fileName="tailwind.config.js"
				/>
			</div>
		{/if}
	</div>
</div>
