<script>
    import squadpage from '$lib/assets/squadpage.svg';
    import menuIcon from '$lib/assets/menu-icon.svg';
    import wolkzwart from '$lib/assets/wolkzwart.svg';
    import wolkwit from '$lib/assets/wolkwit.svg';
    import menu from '$lib/assets/menu.svg';
    import flowers from '$lib/assets/flower.svg';

    let menuOpen = false; //menu is standaard gesloten (false)
</script>

<header>
    <nav>
        <img src={squadpage} alt="squadpage sketch">

        <button class="menu" on:click={() => menuOpen = true}> <!-- open menu button -->
            <img src={menuIcon} alt="menu icon" width="75" height="75">
            <span>Menu</span>
        </button>

            <ul class="navigation" class:open={menuOpen}> <!-- navigation menu, class 'open' toegevoegd als menuOpen true is -->

                <button class="button-close-menu" on:click={() => menuOpen = false}> <!-- close menu button -->
                    <img src={menuIcon} alt="close menu icon" width="75" height="75">
                    <span>Sluit</span>
                </button>

                <img class="menu-image" src={menu} alt="svg of a menu text" width="400" height="auto">

                <img class="flower-image" src={flowers} alt="svg of a flowers" width="100" height="auto">


                <li>
                    <a href="/">
                        <img src={wolkzwart} alt="wolkzwart icon" width="75" height="75">
                        <span>Home </span>
                    </a> 
                </li>
                <li>
                    <a href="/squad2E">Squad 2E
                        <img src={wolkzwart} alt="wolkzwart icon" width="75" height="75">
                    </a>
                    
                </li>
                <li>
                    <a href="/squad2F">Squad 2F
                        <img src={wolkzwart} alt="wolkzwart icon" width="75" height="75">
                    </a>
                </li>
                <li>
                    <a href="/contact">Contact
                        <img src={wolkwit} alt="wolkwit icon" width="75" height="75">
                    </a>
                </li>
            </ul>
    </nav>
</header>

<style>
    nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;
    }

    button {
        all: unset;
        cursor: pointer;

    }

    .menu,
    .button-close-menu  {
        display: flex;
        align-items: center;
        gap: .3em;
        flex-direction: column;
        position: absolute;
        top: 3em;
        right: 1em;
        cursor: pointer;    
    }

    span   {
        font-size: 0.75em;
        text-transform: uppercase;
        padding-right: 1em;
    }

    .navigation {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        translate: -100% 0%; /* verberg menu buiten scherm */
        transition: translate .3s;
        background-color: var(--background-color);
        z-index: 1;
        list-style: none;
    }

    .navigation.open {
        translate: 0% 0%; /* toon menu */
    }

    .menu-image {
        display: block;
        margin: 2em auto 0 auto;
    }
   
   li {
        position: relative;
   }

   li a{
        position: absolute;
        inset: 0; /* maakt de link klikbaar over het hele li element */
        z-index: 2;
        display: block;
   }
</style>