<script>
  let { data } = $props();
  const members = data.members;
</script>

<section class="home-heading">
    <h2>Meet the members</h2>
</section>

<div class="sort-btns">
    <form>
        <!-- <select name="sort" id="sort"> -->
            <option value="default">Squad 2E</option>
            <option value="squad2h">Squad 2H</option>
        <!-- </select> -->
    </form>
</div>

{#each members as member}
    {#if member.mugshot}
        <div class="profile-card">
            <img src="{`https://fdnd.directus.app/assets/${member.mugshot}`}" width="220" alt="student-{member.name}">
            <a href="/">{member.name}</a>
        </div>
    {/if}
{/each}
