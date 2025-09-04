<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
</script>

<main>
    <h2>SQUAD 2E</h2>

    <ul>
    {#each members as member}
        <li><a href="/{member.id}">{member.name}</a></li>
    {/each}
    </ul>

    <h1>SQUADPAGE</h1>

    <ul>
    {#each members as member}
        <li><a href="/{member.id}">{member.name}</a></li>
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
        align-items: center;
        background-image: linear-gradient(to right bottom, #D3FFE5, #257070 );
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
        top: 10%;
        transform: translateX(-50%);
        text-align: center;
    }

    h2:nth-of-type(2) {
        position: absolute;
        left: 50%;
        bottom: 10%;
        transform: translateX(-50%);
        text-align: center;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 2em;
        & li {
            background-color: white;
            padding: 2em;
        }
    }
        
</style>
    
