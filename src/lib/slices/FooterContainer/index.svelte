<script>
	/** @type {import("@prismicio/client").Content.FooterContainerSlice} */
	export let slice;
</script>

<footer>
	<div class="title">{slice.primary.footer_title}</div>
	<div class="img">
		<img src={slice.primary.footer_image.url} alt="" />
	</div>
	<div class="link">
		<a href="{slice.primary.footer_link.url}">{slice.primary.footer_link_title}</a>
	</div>
</footer>

<style>
	footer {
    	position: relative;
		width: 100%;
		left: 0px;
		bottom: 0;
		padding: 1.2rem 0rem 0rem 1.2rem;
		background-color: rgb(217, 217, 217);
		color: rgb(0, 0, 0);

		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		grid-template-rows: 1fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'title title' 'img link';
	}

	.title {
		grid-area: title;
		font-size: 28px;
	}

	.img {
		grid-area: img;
		text-align: center;
	}

	.link {
		grid-area: link;
		font-size: 16px;
	}

	.link a {
		color: rgb(0, 0, 0);
  		text-decoration: none;
	}
</style>
