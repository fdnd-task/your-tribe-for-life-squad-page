<script>
  /** @type {import("@prismicio/client").Content.SquadMembersSlice} */
  export let slice;
  import { PrismicImage } from '@prismicio/svelte'
  

</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
{console.log(slice.items)}
</section>

