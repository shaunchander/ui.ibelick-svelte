<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.postcss';
	import '../prism.css';

	import Header from '$lib/components/base/Header.svelte';
	import Footer from '$lib/components/base/Footer.svelte';
	import { Somerset } from 'somerset';
</script>

<svelte:head>
	{#if !dev}
		<script
			async
			src="https://umami.services.shaunchander.me/script.js"
			data-website-id="8465fa7d-d784-45f2-98c6-5b1b38c8b0a4"
		></script>
	{/if}

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Ubuntu+Mono:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Somerset
	title="ui.ibelick-svelte"
	description="A unique collection of modern UI components and effects built with Svelte and TailwindCSS."
	canonical="https://ui-ibelick-svelte.vercel.app"
	openGraph={{
		title: 'ui.ibelick-svelte',
		description:
			'A unique collection of modern UI components and effects built with Svelte and TailwindCSS.',
		siteName: 'ui.ibelick-svelte',
		url: 'https://ui-ibelick-svelte.vercel.app',
		images: [
			{
				url: 'https://ui-ibelick-svelte.vercel.app/og.png',
				alt: 'Thumbnail'
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image'
	}}
/>

<div class="bg-black">
	<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
		<Header />
		<main class="flex-1"><slot /></main>
		<Footer />
	</div>
</div>
