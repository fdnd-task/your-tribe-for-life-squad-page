<script>
    let { data } = $props();

    const members = data.members;

</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

{#each members as member}
    <div class="profile-card">
        <img class="profile-pic" src="{member.avatar}" alt="profile-pic-{member.id}" width="150">
        <br>
        <a class="profile-name" href="/{member.id}">{member.name}</a>
    </div>
{/each}


