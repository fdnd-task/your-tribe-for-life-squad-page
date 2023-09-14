<script>
	import Page from "../../../routes/+page.svelte";

	/** @type {import("@prismicio/client").Content.MembersSlice} */
	export let slice;

	console.log(slice)
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
	<p>{item.members.data.title}</p>
	<img src={item.members.data.image.url} alt="">
    {/each}
</section>

<style>
	img{
		width: 100%;
	}
</style>