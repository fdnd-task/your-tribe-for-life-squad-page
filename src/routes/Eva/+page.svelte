<main>
  <section class="card">
      <a class="card__back" href="/">back</a>
      <section class="title-section">
          <div class="achtergrondblokje"></div>
          <div class="div-title"><h1>Eef Haller</h1></div>
      </section>

      <!-- Image -->
      <img class="squad-img" src="https://avatars.githubusercontent.com/u/76444716?v=4" alt="Eef Haller" />

      <!-- About Me -->
      <article>
          <h2>About Me</h2>
          <p>
              Hoi! Ik ben Eef, 21 jaar, en ik kom uit Amsterdam. 
              Ik studeer op dit moment Frontend Design & Development aan de HvA. 
              Mijn hobbies zijn gamen, bellen met vrienden en coden.
          </p>
      </article>

      <!-- Socials Section -->
      <section class="card__container-socials">
          <input type="checkbox" id="toggle" class="toggle-checkbox">
          <div class="card__icons">
              <label for="toggle" class="card__button-socials">Socials</label>
              <a href="https://github.com/itsValyria" target="_blank">
                  <img class="card__github-icon" src="/Github_icon.svg" alt="github icon">
              </a>
              <a href="/">
                  <img class="card__mail-icon" src="/mail_icon.svg" alt="mail icon">
              </a>
          </div>
      </section>

      <!-- Visit Card Link -->
      <a class="card__visite-kaartjes" href="https://eefhaller.com/">Bekijk visite kaartjes</a>
  </section>
</main>

<style>
  :root {
      --color-main-bg: #050542;
      --color-main-text: #66e5bf;
      --color-bg-block: #53b8a6;
      --default-border-radius: 10px;
  }

  /* Main card layout */
  .card {
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center; 
      border: 1px solid var(--color-main-text);
      width: 450px;
      height: 680px;
      border-radius: 1em;
      position: relative;
      padding-top: 1rem;
      gap: 1em;
  }

  /* Back link styling */
  .card__back {
      position: absolute;
      top: 1rem;
      left: 1rem;
      text-decoration: none;
      color: var(--color-bg-block);
      font-size: 1rem;
  }

  /* Flexbox and layout for main content */
  main {
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center;   
      height: 100vh;          
  }

  /* Squad image */
  .squad-img {
      border-radius: 50%;
      width: 30%;
  }

  /* Title section styles */
  .title-section {
      margin-top: 2rem; 
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  /* Styling for the rotating background block */
  .div-title {
      background-color: var(--color-main-text);
      color: var(--color-main-bg);
      width: 220px;
      height: 48px;
      position: relative;
      z-index: 2;
      text-align: center;
      border-radius: 3px;
  }

  div.achtergrondblokje {
      background-color: var(--color-bg-block);
      width: 220px;
      height: 55px;
      position: absolute;
      transform: rotate(-6deg);
      z-index: 1;
      top: 5px;
      border-radius: 3px;
  }

  h1 {
      font-family: 'Koulen', sans-serif;
      font-weight: 500;
      text-align: center;
      margin: 0;
  }

  /* Article styling */
  article {
      background-color: white;
      font-size: 14px;
      width: 300px;
      height: auto;
      border-radius: var(--default-border-radius);
      padding-top: 0;
      box-sizing: border-box;
      margin-top: 0.5rem;
      box-shadow: 3px -11px 0px 0px var(--blueberry);
  }

  h2 {
      padding-top: 0.25em;
      background: var(--color-main-text);
      margin: 0;
      padding-left: 0.5em;
      border-top-left-radius: var(--default-border-radius);
      border-top-right-radius: var(--default-border-radius);
      font-family: 'Koulen', sans-serif;
      font-weight: 400;
  }

  p {
      margin: 1em;
      padding-bottom: 0.5rem;
  }

  /* Socials container */
  .card__container-socials {
      display: flex;
      margin: 1rem 0;
      position: relative;
      right: 4.1rem;
  }

  /* Button styling */
  .card__button-socials {
      border-radius: 0.4rem;
      padding: 0 0.4rem;
      background-color: #66E5BF;
      border: none;
      margin-right: 0.5rem;
      cursor: pointer;
      font-family: 'Koulen', sans-serif;
  }

  .card__button-socials:hover {
      background-color: #4aa389;
  }

  /* Hidden checkbox for toggling social icons */
  .toggle-checkbox {
      display: none;
  }

  /* Grid for the social icons layout */
  .card__icons {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-areas: 
          "button-socials github-icon mail-icon";
      align-items: center;
      width: 100%;
      position: relative;
      gap: 1em;
      left: 4.5rem;
  }

  .card__button-socials {
      grid-area: button-socials;
      margin-right: 120px; 
  }

  /* Icon placement */
  .card__github-icon {
      grid-area: github-icon;
      width: 24px;
      height: 24px;
  }

  .card__mail-icon {
      grid-area: mail-icon;
      width: 24px;
      height: 24px;
  }

  /* Visit Card Link */
  .card__visite-kaartjes {
      border-radius: 0.4rem;
      padding: 0.4rem 0.8rem; /* Padding zodat het de button matched */
      background-color: #66E5BF;
      color: var(--color-main-bg);
      text-decoration: none; /* verwijderen van underline */
      font-family: 'Koulen', sans-serif;
      display: inline-block; /* zorgt ervoor dat het als een button gedraagd */
      transition: background-color 0.3s; /* Smooth transition */
      width: 270px;
      text-align: center;
  }

  .card__visite-kaartjes:hover {
      background-color: #4aa389; /* donkere hover */
  }
</style>
