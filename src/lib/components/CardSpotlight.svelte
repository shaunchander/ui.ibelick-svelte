<script lang="ts">
	let div: HTMLDivElement;
	let focused = false;
	let position = { x: 0, y: 0 };
	let opacity = 0;

	const handleMouseMove = (e: MouseEvent) => {
		if (!div || focused) return;

		const rect = div.getBoundingClientRect();

		position = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
	};

	const handleFocus = () => {
		focused = true;
		opacity = 1;
	};

	const handleBlur = () => {
		focused = false;
		opacity = 0;
	};

	const handleMouseEnter = () => {
		opacity = 1;
	};

	const handleMouseLeave = () => {
		opacity = 0;
	};
</script>

<div
	bind:this={div}
	on:mousemove={handleMouseMove}
	on:focus={handleFocus}
	on:blur={handleBlur}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	class="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-black to-slate-950 px-8 py-16 shadow-2xl"
>
	<div
		class="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
		style={`
			opacity: ${opacity};
			background: radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%);
		`}
	/>
	<p class="text-sm text-slate-200">Card Content</p>
</div>
