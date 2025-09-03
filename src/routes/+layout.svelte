<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1>Frontend Design & Development</h1>
	<p>Squadpage 2025-2026</p>
</header>

{@render children?.()}

<style>
	header{
		padding: clamp(10px, 5vw, 32px);

		h1{
			font-size: clamp(32px, 5vw, 96px);
			margin-bottom: 12px;
		}

		p{
			font-size: clamp(24px, 2vw, 32px);
		}
	}
</style>
