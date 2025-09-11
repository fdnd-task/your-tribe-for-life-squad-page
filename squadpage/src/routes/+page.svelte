<script>
    import squadpageSvg from '$lib/assets/squadpage.svg';
    import menuSvg from '$lib/assets/menu.svg'; // menu icon
    import Header from '$lib/components/Header.svelte';
    import avatar from '$lib/assets/default-avatar.png';
    import squad2e from '$lib/assets/squad2e.svg';
    import squad2f from '$lib/assets/squad2f.svg';

    // Data uit +page.server.js
    let { data } = $props();
    const members = data.members;
</script>

<Header />
<main class="squadpage">

  <div class="squadpage-classes">
      <a href="/squad2e">
          <img src={squad2e} alt="squad 2E icon" width="175" height="auto">
      </a>
      <a href="/squad2f">
          <img src={squad2f} alt="squad 2F icon" width="175" height="auto">
      </a>
  </div>

  <ul class="students-grid">
      {#each members as member}
        <li>
          <article class="card">
            <div class="avatar">
              <img src={member.avatar ? member.avatar : avatar } alt={`Mugshot of ${member.name}`} width="130" height="auto" /> <!--standaard avatar als er geen avatar is --> 
            </div>
              <a class="name" href={`/members/${member.id}`}>{member.name}</a>
          </article>
        </li> 
      {/each}
    </ul>
</main>

  <style>
    :root {
      --background-color: #EDE9FE;
      --card-color: #ffffff;
      --text-color: black;
      --font-regular: 'Jacques Francois', sans-serif;
      --font-size-xsmall: 1em;
      --font-size-small: 1.25em;
      --font-size-medium: 1.75em;
      --font-size-large: 3em;
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

    a{
      text-decoration: none;
      color: var(--text-color);
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
  
  
    .students-grid {
      width: 100%;
      max-width: 1100px;
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: clamp(1rem, 2.5vw, 2rem);
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
  
    .card {
      background: var(--card-color);
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 1rem;
      text-align: center;
      display: grid;
      gap: .75rem;
       }
  
    .avatar img {
      display: block;
      width: 100%;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      border-radius: 8px;
    }
  
    .name {
      margin: 0;
      font-size: var(--font-size-small);
      font-family: var(--font-regular);
    }
  </style>
  
  