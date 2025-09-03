<script>
    let { data } = $props();
    console.log(data);
    const members = data.members;
</script>

{#each members as member}
    <a href="/{member.id}">{member.name}</a>
{/each}

<h1>test</h1>
