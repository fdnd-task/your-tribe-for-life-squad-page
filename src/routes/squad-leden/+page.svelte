<script>
      export let data;
      import { PrismicImage } from '@prismicio/svelte'
      import { SliceZone } from '@prismicio/svelte';
    import {components} from '$lib/slices'
  </script>

<h1> Squad A</h1>



<SliceZone slices={data.document.data.slices} {components} />
{console.log(data)}
