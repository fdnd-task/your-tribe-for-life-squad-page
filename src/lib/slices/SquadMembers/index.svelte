<script>
  /** @type {import("@prismicio/client").Content.SquadMembersSlice} */
  export let slice;
  import { PrismicImage } from '@prismicio/svelte'

</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
<ul>
{#each slice.items as item}
    <li>
      <h2>Naam: {item.memberdata.data.membername} </h2>
      <h2>Squad: <span>{item.memberdata.data.squadname}</span></h2>
      <span class="imgBorder"><PrismicImage field={item.memberdata.data.memberimg} width="140" height="200"/></span>
      <a href="{item.memberdata.data.githublink.url}"><span>Github Link</span></a>
    </li>

{/each}

</ul>
</section>

<style>
  ul{
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em;
  }
  li{
    list-style-type: none;
    width: 12em;
    text-align: center;
  }
  .imgBorder{
    display: block;
    border: solid 4px rgb(110, 110, 110);
    padding: 1em;
    border-radius: 10px;
  }
</style>