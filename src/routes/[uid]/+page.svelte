<script>
	import { SliceZone } from '@prismicio/svelte';

	import Header from '$lib/components/header/+page.svelte';

	// what does export exactly do?
	export let data;

	console.log(data);
</script>

<Header list={data.data2} />

<section>
	<h1>{data.data1.slices[0].primary.heading_1}!</h1>

	<img id="image" src={data.data1.image.url} alt="" />

	<h2>{data.data1.title}</h2>

	<ul>
		<li>{data.data1.slices[0].primary.highlight_1}</li>
		<li>{data.data1.slices[0].primary.highlight_2}</li>
		<li>{data.data1.slices[0].primary.highlight_3}</li>
	</ul>

	<img id="pointy-finger" src={data.data1.slices[0].primary.pointy_finger.url} />

	<h2 id="second-header">{data.data1.slices[0].primary.heading_2}</h2>

	<p>{data.data1.slices[0].primary.paragraph_more_about}</p>

	<img id="image2" src={data.data1.slices[0].primary.image_more_about.url} />
</section>

<style>
	section {
		text-align: center;
		margin-left: 10%;
		margin-right: 10%;
	}

	h1 {
		margin-top: 3rem;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	#image {
		width: 17rem;
		filter: saturate(0);
		border: 1em solid #a8a8a8;
	}

	h2 {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	li {
		margin-bottom: 10px;
		padding-left: 1rem;
		text-align: left;
		font-size: 1.3rem;
		margin-bottom: 1.5rem;
	}

	#second-header {
		text-align: left;
		padding: 1rem;
		margin-top: 2rem;
		margin-bottom: -0.8rem;
	}

	p {
		text-align: left;
		padding: 1rem;
	}

	#image2 {
		width: 18rem;
		filter: saturate(0);
	}
</style>
