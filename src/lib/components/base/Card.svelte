<script lang="ts">
	import { ArrowRight } from 'radix-icons-svelte';

	export let name: string;
	export let slug: string;
</script>

<div
	class="relative flex items-center justify-center rounded-xl bg-gray-800/40 px-8 py-32 backdrop-blur"
>
	<a href={`/${slug}`} class="absolute left-5 top-4 text-sm text-slate-400">
		{name}
	</a>
	<div class="absolute right-5 top-3">
		<a href={`/${slug}`}>
			<ArrowRight class="h-5 w-5 text-slate-400" />
		</a>
	</div>
	<div class="[&>button]:w-40 [&>div]:w-40 [&>input]:w-40">
		<slot />
	</div>
</div>
