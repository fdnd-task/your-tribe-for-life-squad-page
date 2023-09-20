<script>
    export let header
</script>

<section class="header" data-slice-type={header.slices[0].slice_type} data-slice-variation={header.slices[0].variation}>
	<img src={header.slices[0].primary.logo_image.url} alt="logo">
	<p>{header.slices[0].primary.logo_title}</p>
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