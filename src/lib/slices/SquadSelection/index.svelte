<script>
  /** @type {import("@prismicio/client").Content.SquadSelectionSlice} */
  export let slice;
  console.log(slice);
</script>

<section
data-slice-type={slice.slice_type}
data-slice-variation={slice.variation}
>
  <h1>{slice.primary.title}</h1>

  <section class="subtitle">
    <p>{slice.primary.subtitle}</p>
  </section>

  <section class="button-a">
    <a href={slice.primary.squada.url} />
  </section>
  <section class="button-b">
    <a href={slice.primary.squadb.url} />
  </section>

</section>
<style>
  * {
    box-sizing: border-box;
    margin: 0px;
    line-height: 1.4;
  }

  html {
    height: 100vh;
  }

  :root {
    --deep-blue: #55b6ae;
    --blue-purple: #768bba;
    --pinkish: #d399bc;
    --hot-pink: #ff3394;
    --light-blue: #90dcff;
  }

  main {
    margin-top: 100px;
    width: 100%;
    height: 100%;
    margin-left: 10px;
  }
  h1 {
    font-family: "Quantico", sans-serif;
    text-transform: uppercase;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    transform: skew(-20deg) rotatez(2deg);
    text-align: center;
    margin-top: 21px;
    margin-left: 18px;
    position: absolute;
    z-index: 100;
    font-size: 50px;
    text-shadow: 5px 1px var(--hot-pink);
  }
</style>
