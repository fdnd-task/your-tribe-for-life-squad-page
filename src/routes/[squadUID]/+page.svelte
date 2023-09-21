<script>
  export let data;
</script>

<a href="/">FDND Squadpage</a>
<h1>{data.page.title}</h1>
{#each data.members as member}
  <a href="{data.page.slug}/{member.uid}">{member.data.first_name}</a>
{/each}
