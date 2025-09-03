<script>
  let { data } = $props();

  
  const members = data.membersData
  console.log(members);
</script>

<h1>Welcome to SvelteKit</h1>

<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

{#each members as member }
    <a href="/{member.id}">{member.name}</a>
{/each}
