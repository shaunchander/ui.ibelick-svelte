<script lang="ts">
	let button: HTMLButtonElement;
	let focused = false;
	let position = { x: 0, y: 0 };
	let opacity = 0;

	const handleMouseMove = (e: MouseEvent) => {
		if (!button || focused) return;

		const rect = button.getBoundingClientRect();

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

<button
	bind:this={button}
	on:mousemove={handleMouseMove}
	on:focus={handleFocus}
	on:blur={handleBlur}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	class="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 px-6 font-medium text-slate-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
>
	<div
		class="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
		style={`
        opacity: ${opacity};
        background: radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f);
        `}
	/>
	Click Me
</button>
