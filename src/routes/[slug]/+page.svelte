<script lang="ts">
	import { components } from '$lib/data';
	import CodeBlock from '$lib/components/base/CodeBlock.svelte';
	export let data;

	let currentComponent = components.filter((component) => component.slug === data.slug);

	const twConfig = JSON.stringify(currentComponent[0].twConfig, null, 2);

	import ComponentPlayground from '$lib/components/base/ComponentPlayground.svelte';
</script>

<div class="mt-10 pb-32">
	<div class="container mx-auto text-white">
		<h1 class="text-md mb-2 font-light text-gray-400">
			{data.name}
		</h1>
		<ComponentPlayground>
			<svelte:component this={currentComponent[0].component} />
		</ComponentPlayground>
		<div class="mt-8">
			<CodeBlock code={data.code} />
		</div>
		{#if data.twCode}
			<div class="mt-8">
				<CodeBlock code={data.twCode} fileName="tailwind.config.js" />
			</div>
		{/if}
	</div>
</div>
