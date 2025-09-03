<script>
  let { data } = $props();

  
  const members = data.membersData
</script>

<h1>Welcome to SvelteKit</h1>

<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

{#each members as member, index }
    <a href="/{member.id}">{member.name}</a>
    <picture>
        <source srcset={`${member.mugshot.src}&format=avif`} type="image/avif">
        <source srcset={`${member.mugshot.src}&format=webp`} type="image/webp">
        <img src={`${member.mugshot.src}&format=jpg`} alt="Mugshot van {member.name}" loading={index >= 5 ? "lazy" : "eager"}>
    </picture>
{/each}

<style>
    @import './App.css';
</style>