<script>
  /** @type {import("@prismicio/client").Content.SquadSelectionSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h1>{slice.primary.title}</h1>
  <p>{slice.primary.subtitle}</p>
  <p>{slice.primary.squadA.url}</p>
  <p>{slice.primary.squadB.url}</p>
</section>

<body>
  

  <style>
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
</body>
