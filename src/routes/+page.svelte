<script lang="ts">
	import Card from '$lib/components/base/Card.svelte';
	import { components } from '$lib/data';
</script>

<section id="components">
	<div class="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center">
		<div class="absolute -top-4 -z-10 flex w-full justify-center">
			<div
				class="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]"
			/>
		</div>
		<div>
			<h1
				class="mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-5xl"
			>
				A unique collection of modern UI components and effects
			</h1>
			<p class="text-xl text-slate-500">
				Crafted with{' '}
				<span class="text-white">Svelte and Tailwind CSS</span>.
			</p>
			<em class="text-sm block text-slate-600 mt-6 font-medium">
				This is an unofficial Svelte port of <a
					target="_blank"
					class="underline"
					href="https://ui.ibelick.com/">ui.ibelick's component library for React</a
				>.
			</em>
		</div>
	</div>
</section>
<div class="mx-auto max-w-7xl py-10">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each components as component}
			<Card slug={component.slug} name={component.name}>
				<svelte:component this={component.component} />
			</Card>
		{/each}
	</div>
</div>
