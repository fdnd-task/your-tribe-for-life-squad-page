<script>

    let { data } = $props();

    const members = data.members;
    console.log(members)


</script>

{#each members as member}
    <p>{member.id}-{member.name}</p>
{/each}




<h1>2G</h1>