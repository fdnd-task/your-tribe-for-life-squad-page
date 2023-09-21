<script>
  /** @type {import("@prismicio/client").Content.FooterSlice} */
  import { PrismicImage } from '@prismicio/svelte'
  export let slice;

  // console.log(slice.items[0].hvalogo);

</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  
  <div>
    <img class="hva-logo" src="{slice.items[0].hvalogo.url}" alt="hva logo"/>
  </div>

</section>

<style>

  :root {
      --white: #fff;
      --turquoise: #55B6AE;
  }

  section{
    background-color: var(--turquoise);
    width: 100%;
    height: auto;
    margin-top: 2em;
    position: absolute;
    bottom: 0;
  }

  .hva-logo{
    max-width: 85%;
    height: auto;
  }

  @media (min-width: 400px) {

    .hva-logo{
    width: 15rem;
    }
  }

  @media (min-width: 800px) {

    .hva-logo{
    width: 20rem;
    }
  }
</style>