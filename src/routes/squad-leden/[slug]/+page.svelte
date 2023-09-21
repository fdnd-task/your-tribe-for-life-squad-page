<script>
      export let data;
      import { PrismicImage } from '@prismicio/svelte'
      import { SliceZone } from '@prismicio/svelte';
    import {components} from '$lib/slices'

    let backgroundTest = data.document.data.backgroundimg.url;
  </script>

<!-- {#each data.document as item}
<h1>{item.data.membername}</h1>
<h2>{item.data.squadname}</h2>
<a href={item.data.githublink.url}>Link</a>
<PrismicImage field={item.data.memberimg} />

{/each}

<SliceZone slices={data.slices} {components} />
{console.log(data)} -->


  <section class="wrapper" style="background-image: url({data.document.data.backgroundimg.url})">
    <!-- <PrismicImage field={data.document.data.backgroundimg} width="600"/>  -->
    <section class="core">
      <SliceZone slices={data.document.data.slices} {components} />
    </section>
  </section>


<!-- {console.log(data)} -->

<style>
  .big-wrapper{
    height: 200em;
  }
  .wrapper{
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    justify-content: center;
    background-size: 80% 70%;
  }

  .core{
    z-index: 6;
  }
</style>