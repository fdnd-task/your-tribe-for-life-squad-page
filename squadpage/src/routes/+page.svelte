<script>
    // Data uit +page.server.js
    let { data } = $props();
    const members = data.members;
  
    function assetUrl(member) {
      if (member?.avatar?.id) {
        return `https://fdnd.directus.app/assets/${member.avatar.id}?fit=cover&width=600&height=800`;
      }
      return "/default-avatar.jpg";
    }
  
    import squadpageSvg from '$lib/assets/squadpage.svg';
    import menuSvg from '$lib/assets/menu.svg'; // menu icon
  </script>
  
  <main class="squadpage">
    <!-- menu button rechtsboven -->
    <button class="menu-button">
      <img src={menuSvg} alt="Menu" />
    </button>
  
    <header class="header">
      <img src={squadpageSvg} alt="Squadpage logo" class="logo" />
    </header>
  
    <ul class="students-grid">
      {#each members as member}
        <li>
          <article class="card">
            <div class="avatar">
              <img
                src={assetUrl(member)}
                alt={"Foto van " + member.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 class="name">{member.name}</h3>
          </article>
        </li>
      {/each}
    </ul>
  </main>
  
  <style>
    :root {
      --background-color: #EDE9FE;
      --text-color: black;
      --font-regular: 'Jacques Francois', sans-serif;
      --font-size-small: 1.25em;
      background-color: var(--background-color);
    }
  
    @font-face {
      font-family: 'Jacques Francois';
      src: url('src/lib/fonts/JacquesFrancois-Regular.ttf') format('truetype');
    }
  

    * {
      box-sizing: border-box;
      scroll-behavior: smooth;
      padding: 0;
      margin: 0;
    }
  
    .squadpage {
      position: relative; /* nodig voor absolute positioning van menu-button */
      min-height: 100vh;
      padding: clamp(1rem, 4vw, 2rem);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(1rem, 2vw, 2rem);
      background-color: var(--background-color);
    }
  
    /* menu button helemaal rechtsboven */
    .menu-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  
    .menu-button img {
      /* width: 50px;
      height: 50px;
      display: block; */
    }
