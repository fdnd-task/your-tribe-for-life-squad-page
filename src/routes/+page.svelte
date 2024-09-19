<script>
  export let data;

  function getPersonLink(person) {
    const personRoutes = {
      'Eef': '/Eva',
      'Rukiya': '/Rukiya',
      'Akiko': '/Akiko',
      'Zainab': '/Zainab',
      'Lesley': '/Lesley'
    };
    return personRoutes[person.name] || '/';
  }

  function handleClick(person, event) {
    event.preventDefault(); // Prevent default link navigatie hehe

    const allImages = document.querySelectorAll('.squad__img');
    
    // Fade out all images
    allImages.forEach(img => {
      img.style.opacity = 0;
    });

    // Wacht voor de fadeout om te completen, en fade dan de nieuwe image in
    setTimeout(() => {
      allImages.forEach(img => {
        img.src = person.avatar ? person.avatar : '/placeholder.jpg'; // Set all images to clicked person's avatar
        img.style.opacity = 1;
      });
    }, 500);

    // Wacht met het doornavigeren
    setTimeout(() => {
      window.location.href = getPersonLink(person);
    }, 2000); // 2000ms totaal voor het effect
  }
</script>

<main>
  <section class="card">
    <article>
      <h1>Our team of experts</h1>
      <p>Wij zijn enthousiaste studenten die de opleiding FDND 
        (Front-end Design & Development) volgen aan de HvA 
        (Hogeschool van Amsterdam).</p>
    </article>
    
    <!-- grid section -->
    <section class="squad">
      {#each data.persons as person, index}
        <a href={getPersonLink(person)} class="squad__link" on:click={(event) => handleClick(person, event)}>
          <img class="squad__img squad__img--{index}" src={person.avatar ? person.avatar : '/placeholder.jpg'} alt={`foto van ${person.name}`} />
        </a>
        {#if index === 0}<p class="squad__F">D</p>{/if}
        {#if index === 1}<p class="squad__D">F</p>{/if}
        {#if index === 2}<p class="squad__N">N</p>{/if}
        {#if index === 3}<p class="squad__D">D</p>{/if}
      {/each}
    </section>

    <footer>
      <p>© Lesley, Akiko, Rukiya, Zainab & Eef</p>
    </footer>
  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center; 
    align-items: center;     
    height: 100vh;     
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-main-text);
    width: 500px;
    border-radius: 1em;
  }

  article {
    line-height: 1.2;
    width: 450px;
  }

  h1 {
    color: var(--color-main-bg);
    background-color: var(--color-main-text);
    border-radius: 0.2em;
    width: 300px;
    height: 40px;
    text-align: center;
    padding: 2px;
  }

  p {
    color: var(--color-main-text); 
  }

  .squad {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: repeat(3, 170px);
    grid-template-areas: 
      "squad__img--0 squad__F squad__img--1"
      "squad__D squad__img--2 squad__N"
      "squad__img--3 squad__D squad__img--4";
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    font-size: 1.5rem;
    font-family: "Nerko One", cursive;
    font-weight: bold;
    font-style: normal;
    width: 450px;
    border: 1px var(--color-main-text) solid;
  }

  .squad__link {
    display: block;
    width: 100%;
    height: 100%;
  }

  .squad__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 500ms ease-in-out;
    opacity: 1;
  }

  footer {
    width: 450px;
  }

  @media (min-width: 48em) {
    .squad {
      display: grid;
      grid-template-columns: repeat(3, 0.5fr);
      grid-template-rows: repeat(3, 170px);
      grid-template-areas: 
        "squad__img--0 squad__F squad__img--1"
        "squad__D squad__img--2 squad__N"
        "squad__img--3 squad__D squad__img--4";
      justify-content: space-between;
      align-items: center;
      justify-items: center;
    }
  }

  @media (min-width: 75em) {
    .squad {
      display: grid;
      grid-template-columns: repeat(3, 0.5fr);
      grid-template-rows: repeat(3, 170px);
      grid-template-areas: 
        "squad__img--0 squad__F squad__img--1"
        "squad__D squad__img--2 squad__N"
        "squad__img--3 squad__D squad__img--4";
      justify-content: space-between;
      align-items: center;
      justify-items: center;
    }

    .squad__img {
      width: 100%;
      height: 100%;
    }
  }
</style>