<script>
  export let data;
  const members = data?.members ?? [];
</script>

<div class="layout-cards">
    {#each members as m}
      <img src={`https://fdnd.directus.app/assets/${m.mugshot}?w=200&h=200&fit=cover`} alt={m.name} />
    {/each}
</div>