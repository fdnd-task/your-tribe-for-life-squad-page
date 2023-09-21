<script>
  export let data;
</script>

<h1>{data.page.title}</h1>

{#each data.squads as squad}
  <a href="/{squad.uid}">{squad.data.title}</a>
{/each}
