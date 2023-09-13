<script>
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<p>{slice.primary.websiteTitle}</p>
</section>

<style>
</style>
