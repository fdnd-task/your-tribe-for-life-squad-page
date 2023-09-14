<script>
  /** @type {import("@prismicio/client").Content.HeaderSlice} */
  export let slice;
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
        <a href="/"> logo </a>
      </li>
      <li>
        <a href="/">Over ons</a>
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
</style>
