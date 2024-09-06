<svelte:head>
    <link rel="stylesheet" href="/css/global.css">
</svelte:head>

<script>
    let lesley = '/assets/Lesley.JPG';
    let zainab = '/assets/Zainab.JPG';
    let rukiya = '/assets/Rukiya.JPG';
    let eva = '/assets/Eva.JPG';
    let akiko = '/assets/Akiko.JPG';
</script>

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



<style>
    /*mobile first Small Devices (Phones, Portrait Tablets)
    30em = 480px */

    article {
        padding: 10px;
        line-height: 1.2;
        width: 26em;
    }

    h1 {
        color: var(--color-main-text);
    }

    p {
        color: var(--color-main-text); 
    }

    section	{
        padding: 10px;
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
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    footer {
        padding: 10px;
    }

    /* Medium Devices (Tablets, Small Desktops) 48em = 992px */
    @media (min-width: 48em) {
        section	{
        padding: 10px;
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
        padding: 10px;
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