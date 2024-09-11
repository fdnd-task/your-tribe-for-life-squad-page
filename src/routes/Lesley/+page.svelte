<svelte:head>
    <link rel="stylesheet" href="/css/global.css">
</svelte:head>

<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let people = data.data || [];
    console.log(people);

    let lesley = '/assets/Lesley.JPG';
    let zainab = '/assets/Zainab.JPG';
    let rukiya = '/assets/Rukiya.JPG';
    let eva = '/assets/Eva.JPG';
    let akiko = '/assets/Akiko.JPG';
</script>

<main>
    <section class="card">
        <article>
            <h1>Our team of experts</h1>  
            <p>Wij zijn enthousiaste studenten die de opleiding FDND 
                (Front-end Design & Development) volgen aan de HvA 
                (Hogeschool van Amsterdam).</p>
        </article>

        <section class="squad">
            <img class="squad__lesley" src={lesley} alt="foto van lesley."/>
            <p class="squad__F">D</p>
            <img class="squad__zainab" src={zainab} alt="foto van zainab."/>
            <p class="squad__D">F</p>
            <img class="squad__rukiya" src={rukiya} alt="foto van rukiya."/>
            <p class="squad__N">N</p>
            <img class="squad__eva" src={eva} alt="foto van eva."/>
            <p class="squad__D">D</p>
            <img class="squad__akiko" src={akiko} alt="foto van akiko."/>
        </section>

        <footer>
            <p>© Lesley, Akiko, Rukiya, Zainab & Eef</p>
        </footer>
</main>


<section class="squad">
    {#each people as person}
        <div class="person">
            <img src={person.avatar} alt={person.name + ' avatar'} />
            <h2>{person.name}</h2>
            <p>{person.nickname}</p>
            <p>Role: {person.role.join(', ')}</p>
            <p>GitHub: <a href={person.github_handle} target="_blank">{person.github_handle}</a></p>
            <p>Website: <a href={person.website} target="_blank">{person.website}</a></p>
            <p>Bio: {person.bio}</p>
        </div>
    {/each}
</section>



<style>
    /*mobile first Small Devices (Phones, Portrait Tablets)
    30em = 480px */
    main {
        display: flex;
        justify-content: center; 
        align-items: center;     
        height: 100vh;     
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--color-main-text);
        width: 500px;
        border-radius: 1em;
    }

    article {
        line-height: 1.2;
        width: 450px;
    }

    h1 {
        color: var(--color-main-bg);
        background-color: var(--color-main-text);
        border-radius: 0.2em;
        width: 250px;
        text-align: center;
        padding: 2px;
    }

    p {
        color: var(--color-main-text); 
    }

    .squad	{
        /* padding: 10px; */
        display: grid;
        grid-template-columns: repeat(3, 0.5fr);
        grid-template-rows: repeat(3, 170px);
        grid-template-areas: 
        "squad__lesley squad__F squad__zainab"
        "squad__D squad__rukiya squad__N"
        "squad__eva squad__D squad__akiko"
        ;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
        font-size: 1.5rem;
        font-family: "Nerko One", cursive;
        font-weight: bold;
        font-style: normal;
        width: 450px;
        border: 1px var(--color-main-text) solid;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    footer {
        width: 450px;
    }

    /* Medium Devices (Tablets, Small Desktops) 48em = 992px */
    @media (min-width: 48em) {
        section	{
        display: grid;
        grid-template-columns: repeat(3, 0.5fr);
        grid-template-rows: repeat(3, 170px);
        grid-template-areas: 
        "squad__lesley squad__F squad__zainab"
        "squad__D squad__rukiya squad__N"
        "squad__eva squad__D squad__akiko"
        ;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
    }
    }

    /* Extra Large Devices (Large Desktops, Monitors) 75em = 1200px*/
    @media (min-width: 75em) {
        section	{
        display: grid;
        grid-template-columns: repeat(3, 0.5fr);
        grid-template-rows: repeat(3, 170px);
        grid-template-areas: 
        "squad__lesley squad__F squad__zainab"
        "squad__D squad__rukiya squad__N"
        "squad__eva squad__D squad__akiko"
        ;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
    }

    img {
        width: 100%;
        height: 100%;
    }
    }

    </style>