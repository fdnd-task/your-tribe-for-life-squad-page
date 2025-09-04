<script>
  let { data } = $props();

  
  const members = data.membersData
</script>

  <main class="person-container">
      {#each members as member, index }
        <details class="person">
           <summary>
              <div class="name-birthdate-container">
                <h2>{member.name}</h2>
                <p class="birthdate">{member.age ? member.age + " Jaar" : "Leeftijd onbekend"}</p>
              </div>
            <a class="cross" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="plus-outline"><g fill="#666" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><path d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"/><path d="M21 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1"/></g></g></svg>
            </a>
          </summary>
          <article>
            <picture>
                <source srcset={`${member.mugshot.src}&format=avif`} type="image/avif">
                <source srcset={`${member.mugshot.src}&format=webp`} type="image/webp">
                <img src={`${member.mugshot.src}&format=jpg`} alt="Mugshot van {member.name}" width="{member.mugshot.width}" height="{member.mugshot.height}" loading={index >= 5 ? "lazy" : "eager"}>
            </picture>
            <p>{member.bio}</p>
            <a class="githubhandle" href="https://github.com/{member.github_handle}" aria-label="Github link">
              <p>Github</p>
            </a>
          </article>
        </details>
      {/each}
    
  </main>

<style>
  @import "./App.css";

  :global(html, body) {
    height: 100%;
    background: var(--bg);
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;

    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }

  .person {
    align-items: center;
    margin-inline: 0.63rem;
    border-bottom: 1px solid var(--accent);

    &:open {
      border-bottom: none;
    }

    @media (min-width: 800px) {
      margin-inline: 2.25rem;
    }

    &:last-child {
      border-bottom: none;
    }

    summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding-block: 0.63rem;

      @media (min-width: 800px) {
        padding-block: 2.25rem;
      }

      h2 {
        margin: 0;
        color: var(--text);
        font-size: 2rem;
        overflow: hidden;
      }

      .birthdate {
        margin: 0;
        font-size: 1.25rem;
        color: var(--text);
      }

      .cross {
        display: flex;
        align-items: center;
      }
    }
    
    article {
      margin-top: 2.25rem;
      border-top: 1px solid var(--accent);
      margin-top: 0rem;
      padding-top: 1rem;
      
      picture {
        display: inline-block;
        width: 100%;
        max-width: 32rem;

        img {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }
      }
    }
  }

  .name-birthdate-container {
    flex-grow: 1;
    display: block;

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      flex: 0 0 66%;
      gap: 2rem;
    }
  }

  .githubhandle {
    all: unset;
    cursor: pointer;

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }


</style>