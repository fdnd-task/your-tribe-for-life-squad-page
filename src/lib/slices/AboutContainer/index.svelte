<script>
	/** @type {import("@prismicio/client").Content.AboutContainerSlice} */
	export let slice;
	console.log(slice);
</script>

<section
	class="about-container"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<!-- Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices -->

	<h2>{slice.primary.about_title}</h2>
	<p>{slice.primary.about_text}</p>
	<img src={slice.primary.about_image.url} alt="hot dog gif" />
</section>

<style>
	h2 {
		margin-top: 1em;
		margin-bottom: 1em;
		text-align: center;
	}

	img {
		width: 302px;
		filter: saturate(0);
		justify-content: center;
	}

	p {
		text-align: left;
		margin-top: 50px;
		margin-bottom: 50px;
		margin-left: 1.5em;
	}
</style>
