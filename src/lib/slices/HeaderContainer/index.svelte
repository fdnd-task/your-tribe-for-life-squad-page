<script>
	/** @type {import("@prismicio/client").Content.HeaderContainerSlice} */
	export let slice;

	console.log(slice)
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src={slice.primary.logoImage.url} alt="logo">
	<p>{slice.primary.logoTitle}</p>
</section>

<style>
	section{
		display: flex;
		align-items: flex-end;
		margin-top: 1.875em;
	}
	img{
		width: 4.5em;
		margin-right: 1em;
	}
	p{
		font-size: 1.5em;
		margin-bottom: 0.5em;
	}
</style>
