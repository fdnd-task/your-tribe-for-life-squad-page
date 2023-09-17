<script>
	import Page from '../../../routes/+page.svelte';

	/** @type {import("@prismicio/client").Content.MembersSlice} */
	export let slice;

	console.log(slice)
</script>

<section class="all-members" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<section class="member-overview">
			<div class="image-container">
				<img src={item.members.data.image.url} alt="" />
			</div>
			<p>{item.members.data.title}</p>
		</section>
	{/each}
</section>

<style>
	.all-members {
		display: flex;
		overflow-x: scroll;
		margin: 3.125em 0;
	}

	.image-container{
		border: 1em solid #A8A8A8;
		margin-right: 2em;
		margin-bottom: 0;
		display: flex;
	}

	p {
		font-size: 1.25em;
		margin-top: 0.5em;
	}
	
	img{
		width: 10em;
		height: 11em;
		object-fit: cover;
		filter: saturate(0);
	}
</style>
