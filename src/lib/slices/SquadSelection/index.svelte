<script>
  /** @type {import("@prismicio/client").Content.SquadSelectionSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h1>{slice.primary.title}</h1>
  <div class="plate" />
  <div class="front-plate" />

  <section class="subtitle">
    <p>{slice.primary.subtitle}</p>
  </section>

  <div class="button-wrapper">
    <section class="button-a">
      <a href={slice.primary.squada.url}>Squad A</a>
    </section>
    <section class="button-b">
      <a href={slice.primary.squadb.url}>Squad B</a>
    </section>
  </div>
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
  /*section title*/
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

  .plate {
    background-color: var(--pinkish);
    margin: auto;
    width: 95%;
    height: 110px;
    transform: skew(-15deg) rotateX(15deg) rotateY(-175deg);
    position: relative;
    z-index: 5;
  }

  .front-plate {
    background-color: var(--deep-blue);
    margin: -50px auto;
    width: 95%;
    height: 110px;
    transform: skew(-15deg) rotateX(15deg) rotateY(-173deg);
    position: relative;
    z-index: 10;
  }

  /*end section title*/

  /*section subtitle*/
  .subtitle {
    font-family: "Quantico", sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    color: var(--blue-purple);
    text-align: center;
    margin-top: 120px;
  }

  /*end section subtitle*/

  /* section buttons*/

  a {
    margin: 0;
    height: 100dvh;
    display: grid;
    place-items: center;

    aspect-ratio: 1;
    height: 6.5em;
    background-color: var(--pinkish);
    transform: skewX(20deg);
    box-shadow: -1em 1em 0 var(--blue-purple);
    transition: 0.5s;

    font-family: "Quantico", sans-serif;
    text-transform: uppercase;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
  }

  a:hover {
    transform: skewX(-20deg);
    box-shadow: 1em 1em 0 var(--blue-purple);
  }

 

  .button-wrapper {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50%;
  
  }
</style>
