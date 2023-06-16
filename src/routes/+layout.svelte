<script lang="ts">
	import '../app.postcss';

	import Header from '$lib/components/base/Header.svelte';
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
		<footer>
			<div class="flex-col flex space-y-2 items-center justify-center py-8">
				<span class="text-sm text-gray-400">
					Ported to Svelte by
					<a
						href="https://twitter.com/shaunchander"
						target="_blank"
						rel="noopener noreferrer"
						class="ml-1 text-white"
					>
						@shaunchander
					</a>
				</span>
				<span class="text-sm text-gray-400">
					Original components for react made by
					<a
						href="https://twitter.com/Ibelick"
						target="_blank"
						rel="noopener noreferrer"
						class="ml-1 text-white"
					>
						@Ibelick
					</a>
				</span>
			</div>
		</footer>
	</div>
</div>
