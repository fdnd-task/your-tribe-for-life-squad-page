<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	import Header from '$lib/components/header/+page.svelte'

	export let data;
</script>

<Header list={data}/>
<SliceZone slices={data.slices} {components}/>
