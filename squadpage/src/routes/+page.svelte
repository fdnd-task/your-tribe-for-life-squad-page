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
