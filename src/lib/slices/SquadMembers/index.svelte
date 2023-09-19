<script>
  /** @type {import("@prismicio/client").Content.SquadMembersSlice} */
  export let slice;
  import { PrismicImage } from '@prismicio/svelte'
  

</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>

{#each slice.items as item}
<article>
  <!-- <h2>{item.squadmembers.data.membername} <span>{item.squadmembers.data.squadname}"</span></h2>
  <PrismicImage field={item.squadmembers.data.memberimage} />
  <a href="/{item.squadmembers.uid}"><span>Nerd stats</span></a> -->
  {console.log(item)}

</article>
{/each}
</section>

