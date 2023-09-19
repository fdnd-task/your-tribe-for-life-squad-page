<script>
      export let data;
      import { PrismicImage } from '@prismicio/svelte'
      import { SliceZone } from '@prismicio/svelte';
    import {components} from '$lib/slices'
  </script>

<h1> Squad A</h1>
<!-- {#each data.document as item}
<h1>{item.data.membername}</h1>
<h2>{item.data.squadname}</h2>
<a href={item.data.githublink.url}>Link</a>
<PrismicImage field={item.data.memberimg} />

{/each}

<SliceZone slices={data.slices} {components} />
{console.log(data)} -->


<SliceZone slices={data.document.data.slices} {components} />
<!-- {console.log(data)} -->
