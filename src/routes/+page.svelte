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


<div class="layout-cards">
    {#each members as m}
      <img src={`https://fdnd.directus.app/assets/${m.mugshot}?w=200&h=200&fit=cover`} alt={m.name} />
    {/each}
</div>

