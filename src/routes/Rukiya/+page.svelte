<script>
    // export let data; 

</script>

<a href="/"> back </a>
<main>
    <section class="title-section">
        <div class="achtergrondblokje"></div>
        <div class="div-title"><h1>Akiko Schermer</h1></div>
    </section>
    <img class="img-card" src="/#" alt="Avatar image">
    
    <article>
        <h2> about me</h2>
        <p>
            Hoi! Ik ben Zainab, 20 jaar en kom uit Amsterdam. 
            Ik studeer momenteel Frontend Design & Development @ HvA.
            In mijn vrije tijd speel ik voetbal, game ik en lees ik graag!
        </p>

    </article>



<section class="container_socials">
    <!-- Verborgen checkbox  -->
    <input type="checkbox" id="toggle" class="toggle-checkbox">
    
    <label for="toggle" class="button-socials">Socials</label>
    
    <!-- De content die verborgen/zichtbaar moet worden -->
    <div class="icons">
        <a href="/">
            <img src="/Github_icon.svg" alt="github icon">
        </a>
       <a href="/">
        <img src="/mail_icon.svg" alt="mail icon">
       </a>
    </div>
</section>
</main>
<style>
    :root {
		--color-main-bg: #050542;
		--color-main-text: #66e5bf;
		--color-bg-block: #53b8a6;

        --default-border-radius:10px;
	}

/* TITLE */
a {
    text-decoration: none;
    color: var(--color-bg-block);
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
  
}

h1 {
    font-family: 'Koulen', sans-serif;
    font-weight: 500;
    /* font-size: 28px; */
    text-align: center;
    max-width: 100%;
    word-wrap: break-word;
    margin:0;
	}

    .title-section {
        margin-bottom: 1rem;
    }

	.div-title {
		background-color: var(--color-main-text);
		color: var(--color-main-bg);
		width: 220px;
		height: 48px;
		position: relative;
		z-index: 2;
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 3px;
	}

	div.achtergrondblokje {
		background-color: var(--color-bg-block);
		color: var(--color-main-text);
		width: 220px;
		height: 55px;
		position: absolute;
		transform: rotate(-6deg);
		z-index: 1;
		top: 30px;/* top: 58px;   */
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 3px;
	}

    /* Image */
    .img-card {
        border-radius: 50%;
    }

    /* ABOUT ME */

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
    /* border-radius */
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
    /* font */
    font-family:'Koulen', sans-serif ;
    font-weight: 400;
}

p {
    margin: 1em;
    padding-bottom: 0.5rem;
    
}
    /* SOCIALS BUTTON */

    .container_socials {
        display: flex;
        margin: 1rem 0;
        position: relative;
        right: 4.1rem;
       
    }

    .button-socials {
        border-radius: 0.4rem;
        padding:0 0.4rem;
        background-color: #66E5BF;
        border: none;
        margin-right: 0.5rem;
        display: inline;
        cursor: pointer;
        font-family:'Koulen', sans-serif ;
    }

    .button-socials:hover {
        background-color: #4aa389;
    }
    
    /* Verberg de checkbox zelf */
    .toggle-checkbox {
        display: none;
    }

    /* Verberg standaard de icons */
    .icons {
        display: none;
    }

    /* laat de icons zien wanneer de button (checkbox)is gelkikt  */
    .toggle-checkbox:checked + .button-socials + .icons {
        display: block;
    }
</style>
