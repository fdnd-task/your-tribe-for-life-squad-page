<script>

    import { SliceZone } from '@prismicio/svelte';

    import {components} from '$lib/slices'

    export let data

</script>

<SliceZone slices={data.slices[0]} {components} />
{console.log(data.slices[0])}