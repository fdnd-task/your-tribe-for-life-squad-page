<script>
    // betekent dat deze component of pagina verwacht dat de data vanuit +page.js meegegven wordt aan deze pagina
    export let data;

    function getPersonLink(person) {
      //mapping van elke persoon naar specifieke route
      const personRoutes = {
        'Eva': '/Eva',
        'Rukiya': '/Rukiya',
        'Akiko': '/Akiko',
        'Zainab': '/Zainab',
        'Lesley': '/Lesley'
      };

      return personRoutes[person.name] || '/';
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
        <!-- #each zorgt ervoor dat ik een loop kan maken binnen de grid class squad -->
        {#each data.persons as person, index}
            <!-- for elke persoon word er een image gerenderd in dit geval zijn het er 5 aan de hand van de specifieke filter -->
             <!-- squad__img is een generalisatie van class name voor de images squad__img--{index} en de index geeft de class een unieke nummer dat start van 0 -->
            <a href={getPersonLink(person)} class="squad__link">
              <img class="squad__img squad__img--{index}" src={person.avatar ? person.avatar : '/placeholder.jpg'} alt={`foto van ${person.name}`} />
            </a> 
        <!--Met deze if statement heeft als index is of gelijk is aan de nummer zet dan deze de letter  -->
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
      width: 250px;
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
  
    .squad__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  