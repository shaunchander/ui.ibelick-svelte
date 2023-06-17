<script lang="ts">
	import Code from './Code.svelte';
	import CopyCode from './CopyCode.svelte';

	export let code: string;
	export let copy: string;
	export let fileName = '';
</script>

<div class="relative overflow-x-auto rounded-md border border-neutral-800 p-4">
	{#if fileName}
		<div class="absolute left-4 top-4">
			<span class="text-sm text-gray-400">{fileName}</span>
		</div>{/if}
	<div class="absolute right-4 top-4">
		<CopyCode code={copy} />
	</div>
	<div class="pt-10">
		<Code {code} />
	</div>
</div>
