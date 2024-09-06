<script>
	export let data;

	import Brief from '$lib/briefForm.svelte';

	console.log({ data });
</script>

<h1>Example:</h1>
<h2>{data.persons[2].name}</h2>
<p>{data.persons[2].prefix} {data.persons[2].surname}</p>

<Brief />