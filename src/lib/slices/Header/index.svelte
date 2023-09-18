<script>
  /** @type {import("@prismicio/client").Content.HeaderSlice} */
  export let slice;
  console.log(slice.items[0])
</script>


<body>
  <header>
    <h1 class="fdnd">fdnd</h1>
    <button class="fdnd-button"><a href={slice.items[0].overons.url}>Over ons</a></button>
  </header>
</body>

<style>

:root {
    --white: #fff;
    --blueberry: #050542;
    --turquoise: #66e5bf;
    --lavender: #a675f5;
    --attention: #050542;
    --attention-background: #05054233;
    --call-to-action: #fffc86;
    --rounded: .5rem;
    --pilled: 2rem;
    --shadow: .3rem
}
  /* Basic styling for the header */
  header {
      background-color: #ffffff;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
  }

  /* Responsive styling for smaller screens */
  @media (max-width: 768px) {
      header {
          flex-direction: column;
          align-items: flex-start;
          padding: 10px;
      }

      button {
          margin-top: 10px;
      }
  }

  .fdnd {
  border: 1px solid var(--white);
  border-radius: var(--rounded);
  box-shadow: calc(-1 * var(--shadow)) var(--shadow) 0 0 var(--turquoise);
  color: var(--white);
  background: var(--turquoise);
  text-transform: lowercase;
  padding: 0.5rem 1.2rem;
  font-size: 2rem;
  display: block;
}

.fdnd-button {
  border: 1px solid var(--turquoise);
  border-radius: var(--rounded);
  box-shadow: calc(-1 * var(--shadow)) var(--shadow) 0 0 var(--turquoise);
  color: var(--turquoise);
  text-transform: lowercase;
  padding: 0.5rem 1.2rem;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  font-family: Arial, sans-serif; /* Change the font family to your preferred flat font */
  font-weight: normal;
  display: inline-block; /* Make the button inline with the text */
  margin-top: 10px; /* Add some spacing between the h1 and the button */
}

.fdnd-button > a {
  text-decoration: none;
}
</style>
