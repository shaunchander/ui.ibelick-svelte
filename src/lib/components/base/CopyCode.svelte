<script lang="ts">
	import { Copy, Check } from 'radix-icons-svelte';

	export let code: string;

	let hasCheckIcon = false;

	const onCopy = () => {
		navigator.clipboard.writeText(code);
		hasCheckIcon = true;

		setTimeout(() => {
			hasCheckIcon = false;
		}, 1000);
	};
</script>

<div
	class="cursor-pointer rounded-md border border-neutral-900 bg-neutral-800 p-2 transition hover:bg-neutral-700"
	on:click={onCopy}
>
	{#if hasCheckIcon}
		<Check class="h-4 w-4 text-white" />
	{:else}
		<Copy class="h-4 w-4 text-white" />
	{/if}
</div>
