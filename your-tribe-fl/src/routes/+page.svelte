<script>
  let { data } = $props();
  const members = data.members;
</script>

<h2>Meet the student</h2>

<form>
    <select name="sort" id="sort">
        <option value="default">Squad 2E</option>
        <option value="squad2h">Squad 2H</option>
    </select>
</form>

{#each members as member}
    <div class="profile-card">
        <img src="{`https://fdnd.directus.app/assets/${member.mugshot}`}" width="200" alt="student-{member.name}">
        <a href="/">{member.name}</a>
    </div>
{/each}
