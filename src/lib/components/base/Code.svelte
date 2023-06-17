<script lang="ts">
	import { highlight } from '$lib/shiki';
	import type { Lang } from 'shiki';

	export let code: string;
</script>

<div>
	{@html code}
</div>
