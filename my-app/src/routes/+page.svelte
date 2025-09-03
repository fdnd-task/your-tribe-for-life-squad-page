<script>
    // haalt de data op
    let { data } = $props();

    // zet de members uit de database in een const
    const members = data.members
</script>

<!-- Each loop die de members toont uit de database, elke member krijgt een link naar hun eigen detailpagina ({member.id}) -->
{#each members as member}
    <a href="/{member.id}">{member.name} - {member.id}</a>
{/each}
