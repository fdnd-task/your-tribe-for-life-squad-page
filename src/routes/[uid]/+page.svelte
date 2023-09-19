<script>
	import { SliceZone } from '@prismicio/svelte';

	import Header from '$lib/components/header/+page.svelte';

	// what does export exactly do?
	export let data;

	console.log(data);
</script>

<Header list={data.data2} />

<section>
	<h1>{data.data1.slices[0].primary.heading_1}</h1>

	<img id="image" src={data.data1.image.url} alt="" />

	<h2>{data.data1.title}</h2>

	<ul>
		<li>{data.data1.slices[0].primary.highlight_1}</li>
		<li>{data.data1.slices[0].primary.highlight_2}</li>
		<li>{data.data1.slices[0].primary.highlight_3}</li>
	</ul>

	<h2>{data.data1.slices[0].primary.heading_2}</h2>

	<p>{data.data1.slices[0].primary.paragraph_more_about}</p>

	<img id="image2" src={data.data1.slices[0].primary.image_more_about.url} />
</section>

<style>
	/* body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
	} */

	#image {
		width: 10rem;
		filter: saturate(0);
		border: 1em solid #a8a8a8;
	}

	#image2 {
		width: 10rem;
		filter: saturate(0);
	}

	section {
		text-align: center;
		margin-left: 10%;
		margin-right: 10%;
	}

	p, h2{
		text-align: left; 
		max-width: 600px; 
		margin: 0 auto; 
		padding: 20px; 
	}
	
	ul {
		padding: 0;
		list-style: none;
	}
	li {
		margin-bottom: 10px;
	}
</style>
