<h1>Welcome to SvelteKit!</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
  export let data;
  const members = data?.members ?? [];

  // darkmode
  import { onMount } from "svelte"

onMount(() => {
  const btn = document.getElementById("dark-mode-button")

  btn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode-active")
  })
})
</script>


 {#each members as m}
      <img
        src={`https://fdnd.directus.app/assets/${m.mugshot}?w=200&h=200&fit=cover`}
        alt={m.name}
      />
{/each}


