<script>
  /** @type {import("@prismicio/client").Content.MainOveronsSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>

  <header>
    <h1> Over ons</h1>
    <div class="plate"/>
    <div class="front-plate"/>
  </header>

<h2> Meet the team</h2>


</section>

<style>

  section{
    margin-top: 2em;
  }

  header{
    padding-bottom: 5em;
  }

  h1{
    text-transform: uppercase;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    transform: skew(-20deg) rotatez(2deg);
    text-align: center;
    margin-top: 1.7rem;
    margin-left: 3.1rem;
    position: absolute;
    z-index: 100;
    font-size: 3rem;
    text-shadow: 5px 1px var(--hot-pink);
  }

  .plate {
    background-color: #90DCFF;
    margin: auto;
    width: 95%;
    height: 5em;
    transform: skew(-15deg) rotateX(15deg) rotateY(-175deg);
    position: relative;
    z-index: 5;
  }

  .front-plate {
    background-color: var(--deep-blue);
    margin: -3rem auto;
    width: 95%;
    height: 5em;
    transform: skew(-15deg) rotateX(15deg) rotateY(-173deg);
    position: relative;
    z-index: 10;
  }

  h1, h2{
    font-family: 'Quantico', openSans, sans-serif;
  }

  h2{
    color: var(--deep-blue);
    text-align: center;
  }

</style>