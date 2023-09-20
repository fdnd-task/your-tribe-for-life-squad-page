<script>
  /** @type {import("@prismicio/client").Content.HeaderSlice} */
  export let slice;
  // console.log(slice.items[0])
</script>


<header>
  <h1 class="fdnd">fdnd</h1>
  <a href={slice.items[0].overons.url}>Over ons</a>
</header>


<style>
:root {
    --white: #fff;
    --turquoise: #55B6AE;
    --rounded: .3rem;
    --shadow: .3rem
}
  /* Basic styling for the header */
  header {
      background-color: #ffffff;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
  }

  /* Responsive styling for smaller screens */
  /* @media (max-width: 768px) {
      header {
          flex-direction: column;
          align-items: flex-start;
          padding: 10px;
      }
  } */

  .fdnd {
  border: 1px solid var(--white);
  border-radius: var(--rounded);
  /* box-shadow: calc(-1 * var(--shadow)) var(--shadow) 0 0 var(--turquoise); */
  color: var(--white);
  background: var(--turquoise);
  text-transform: lowercase;
  padding: 0.5rem 1.2rem;
  font-size: 2rem;
  display: block;
}

a {
  text-decoration: none;
  color: var(--turquoise);
  text-transform: uppercase;
  font-family: 'Quantico', openSans, sans-serif;
  font-size: 1.4em;
  font-weight: bold;
}

a:hover{
  text-decoration: underline;
}
</style>
