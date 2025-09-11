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
