<script>
	import { SliceZone } from '@prismicio/svelte';

	import Header from '$lib/components/header/+page.svelte';

	// what does export exactly do?
	export let data;

	console.log(data.data1);
</script>

<Header list={data.data2} />

<section>
	<div class="grain" />
	<h1>{data.data1.slices[0].primary.heading_1}!</h1>

	<img id="image" src={data.data1.image.url} alt="" />

	<h2>{data.data1.title}</h2>

	<ul>
		<div class="fingers">
			<img id="pointy-finger" src={data.data1.slices[0].primary.pointy_finger_svg.url} />
			<img id="pointy-finger" src={data.data1.slices[0].primary.pointy_finger_svg.url} />
			<img id="pointy-finger" src={data.data1.slices[0].primary.pointy_finger_svg.url} />
		</div>

		<div class="info-list">
			<li>{data.data1.slices[0].primary.highlight_1}</li>
			<li>{data.data1.slices[0].primary.highlight_2}</li>
			<li>{data.data1.slices[0].primary.highlight_3}</li>
		</div>
	</ul>

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
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	.fingers {
		width: 2.8rem;
		z-index: 2;
	}

	#pointy-finger {
		margin-left: 1rem;
		margin-bottom: 1.3rem;
	}

	.info-list {
		font-size: 1.3rem;
	}

	li {
		margin-left: 2rem;
		margin-top: 1.6rem;
		margin-bottom: 1.6rem;
		text-align: left;
	}

	#second-header {
		text-align: left;
		padding: 1rem;
		margin-top: -0.5rem;
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
