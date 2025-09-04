<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
    const members2 = data.members2; 
</script>

<main>
    <h2>SQUAD 2E</h2>

    <ul>
    {#each members as member}
        <li>
            <img src="https://fdnd.directus.app/assets/{member.mugshot}" alt="portret {member.name}">
            <a href="/{member.id}">{member.name}</a>
        </li>
        
    {/each}
    </ul>

    <h1>SQUADPAGE</h1>

    <ul>
    {#each members2 as member2}
        <li>
            <img src="https://fdnd.directus.app/assets/{member2.mugshot}" alt="portret {member2.name}">
            <a href="/{member2.id}">{member2.name}</a>
        </li>
    {/each} 
    </ul>
        
    <h2>SQUAD 2F</h2>
</main>
    
        
<style>
    main {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: linear-gradient(to right bottom, #D3FFE5, #257070 );
        overflow-y: hidden;
    }

    h1 {
        margin: 1em;
        padding: 0;
        text-align: center;
    }

    h2 {
        margin: 0;
        padding: 0;
    }   

    h2:nth-of-type(1) {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translateX(-50%);
        text-align: center;
    }

    h2:nth-of-type(2) {
        position: absolute;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%);
        text-align: center;
    }
    
    /* https://css-tricks.com/css-only-carousel/ */
    ul {
        display: flex;
        justify-content: flex-start;
        gap: 2em;
        list-style: none;
        padding: 0;
        margin: 0;

        overflow-x: auto;
        scroll-snap-type: x mandatory; /* zorgt dat de als je scrollt ze echt snappen in place */
        scroll-behavior: smooth; 
        margin-left: 1em;
        & li {
            flex: 0 0 auto; /* zorgt dat de li'tjes hun eigen breedte houden */
            scroll-snap-align: start;
            background-color: white;
            width: 125px;
            height: 200px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                margin-bottom: 0;
                display: block;
            }
        }
    }
</style>
    
