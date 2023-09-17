<script>
	import { SliceZone } from '@prismicio/svelte';

	// import HeaderSlice from '$lib/slices/HeaderContainer/index.svelte';
    // import FooterSlice from '$lib/slices/FooterContainer/index.svelte';


	// const components = {
	// 	header_container: HeaderSlice,
    //     footer_container: FooterSlice
        
	// };

	// what does export exactly do?
	export let data;

	console.log(data);
</script>

<section>
	<h1>{data.title}</h1>
</section>

<!-- <SliceZone slices={data.slices} {components} /> -->
