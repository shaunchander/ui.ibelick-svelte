<script lang="ts">
	import { TwitterLogo, GithubLogo } from 'radix-icons-svelte';
</script>

<header class="flex items-center justify-between py-8">
	<a href="/">
		<div class="text-xl text-white">ui.ibelick-svelte</div>
	</a>
	<nav class="flex gap-6">
		<a
			href="https://twitter.com/shaunchander"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex"
		>
			<TwitterLogo class="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
		</a>
		<a
			href="https://github.com/shaunchander/ui.ibelick-svelte"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex"
		>
			<GithubLogo class="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
		</a>
	</nav>
</header>
