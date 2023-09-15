<script>
  /** @type {import("@prismicio/client").Content.HeaderSlice} */
  export let slice;
  console.log(slice.items[0])
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  Placeholder component for {slice.slice_type} (variation: {slice.variation})
  Slices
</section>

<header>
  <nav>
    <ul>
      <li>
        <a href="/"><img src={slice.items[0].logo.url}></a>
      </li>
      <li>
        <a href={slice.items[0].overons.url}>hj</a>
      </li>
    </ul>
  </nav>
</header>

<style>

  header{
    background-color: #49297E;
    color: #fff;
    padding: 5em;
  }

  a{
     color: #fff;
  }
</style>
