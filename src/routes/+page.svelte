<script>
  export let data
</script>

<main>
  {#each data.persons as person}
    <p>{person.name}</p>
    {/each}
</main>

<style>
</style>
