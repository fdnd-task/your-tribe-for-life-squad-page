<script>
  let { data } = $props();

  
  const members = data.membersData
  console.log(members);

  
</script>

<main>

  <header>
    <!-- Branco -->
  </header>
  
  <section>
    
      {#each members as member }
        <article class="person">
          <!-- <a href="/{member.id}">{member.name} </a> -->
          <p>{member.name}</p>
          <p class="birthdate">{member.birthdate} Jaar</p>
          <a class="cross" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="plus-outline"><g fill="#666" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><path d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"/><path d="M21 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1"/></g></g></svg>
          </a>
          </article>
      {/each}
    
  </section>
  
</main>
