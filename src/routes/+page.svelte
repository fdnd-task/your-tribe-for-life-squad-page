<script>
  let { data } = $props();

  
  const members = data.membersData
  console.log(members);

  function calculateAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // If birthday hasn't happened yet this year, subtract one
    const birthdayHasPassed =
      monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0);

    if (!birthdayHasPassed) {
      age--;
    }

    return age;
  }
  
</script>

<main>

  <header>
    <!-- Branco -->
  </header>
  
  <section class="person-container">
    
      {#each members as member }
        <article class="person">
          <!-- <a href="/{member.id}">{member.name} </a> -->
          <p>{member.name}</p>
          <p class="birthdate">{calculateAge(member.birthdate)} Jaar</p>
          <a class="cross" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="plus-outline"><g fill="#666" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><path d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"/><path d="M21 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1"/></g></g></svg>
          </a>
          </article>
      {/each}
    
  </section>
  
</main>

<style>

  :global(html, body) {
    height: 100%;
    background: black;
    margin: 0;
  }

  .person-container {
    display: flex;
    flex-direction: column;
  }

  .person {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 2.25em;
    position: relative;

    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr 2.5fr;
    }

    p {
      font-size: 24px;
      color: white;
      margin: 0;

      @media (min-width: 600px) {
        font-size: 32px;
      }

      &.birthdate {
        font-size: 20px;
        text-align: right;
      }
    }

    .cross {
      justify-self: end;
      display: flex;
      justify-items: center;
    }

    &::after {
      content: '';
      position: absolute;
      left: 2.25em;
      right: 2.25em;
      bottom: 0;
      height: 1px;
      background: rgb(37, 37, 37);
    }

    &:last-child::after {
      display: none;
    }
  }

</style>