<script>

    import { SliceZone } from '@prismicio/svelte';

    import {components} from '$lib/slices'

    export let data

</script>

<SliceZone slices={data.slices} {components} />
<a href="/squad-leden/squadA">link</a>
<a href="/squad-leden/squadB">link</a>