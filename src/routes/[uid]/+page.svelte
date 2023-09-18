<script>
	import { SliceZone } from '@prismicio/svelte';

	import Header from '$lib/components/header/+page.svelte'

	// what does export exactly do?
	export let data;

	console.log(data.data1.slices);
</script>

<Header list={data.data2}/>
<section>
	<h1>{data.data1.title}</h1>
	<p>{data.data1.slices[0].primary.heading_1}</p>
</section>
