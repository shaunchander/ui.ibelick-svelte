<script lang="ts">
	import '../app.postcss';
	import '../prism.css';

	import Header from '$lib/components/base/Header.svelte';
	import Footer from '$lib/components/base/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Ubuntu+Mono:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="bg-black">
	<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
		<Header />
		<main class="flex-1"><slot /></main>
		<Footer />
	</div>
</div>
