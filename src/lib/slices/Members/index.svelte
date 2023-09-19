<script>
	import Page from '../../../routes/+page.svelte';

	/** @type {import("@prismicio/client").Content.MembersSlice} */
	export let slice;
</script>

<section
	class="all-members"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#each slice.items as item}
		<section>
			<a href={item.members.uid}>
				<div class="image-container">
					<img src={item.members.data.image.url} alt="" />
				</div>
				<p>{item.members.data.title}</p>
			</a>
		</section>
	{/each}
</section>

<style>
	.all-members {
		display: flex;
		overflow-x: scroll;
		margin: 2em 0 3.125em 0;
		position: relative;
		z-index: 2;
	}

	a{
		text-decoration: none;
	}

	a:hover {
		cursor: url("/src/lib/assets/CursorSHover.svg"), auto;
	}

	.image-container {
		border: 1em solid #a8a8a8;
		margin-right: 2em;
		margin-bottom: 0;
		display: flex;
	}

	p {
		font-size: 1.25em;
		margin-top: 0.5em;
	}

	img {
		width: 10em;
		height: 11em;
		object-fit: cover;
		filter: saturate(0);
	}
</style>
