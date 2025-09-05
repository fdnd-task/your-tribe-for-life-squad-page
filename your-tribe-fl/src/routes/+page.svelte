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

<style>
    .profile-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
    }
    .profile-pic {
        padding: 1rem;
        margin-bottom: 1rem;
        background: rgba(255, 255, 255, 0.17);
        border-radius: 16px;
        box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        inset 0 0 0px 0px rgba(255, 255, 255, 0);
        backdrop-filter: blur(7.5px);
        -webkit-backdrop-filter: blur(7.5px);
        border: 1px solid rgba(255, 255, 255, 1);
    }
    .profile-name {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.17);
        border-radius: 24px;
        box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        inset 0 0 0px 0px rgba(255, 255, 255, 0);
        backdrop-filter: blur(7.5px);
        -webkit-backdrop-filter: blur(7.5px);
        border: 1px solid rgba(255, 255, 255, 1);
        transition: transform 0.2s ease-in-out;
        &:hover {
            transform: scale(1.1) rotate(10deg);
        }
    }

</style>

