<script>
    let { data } = $props(); // data die uit page.server.js komt word hier opgehaald om gebruikt te worden

    const member = data.member; 
</script>
<main>
    <div class="content">
    <a href="/">Terug naar home</a>
        <h1 class="text-gradient">{member.name.split(' ')[0]}</h1>
        <img src="https://fdnd.directus.app/assets/{member.mugshot}" alt="portret {member.name}">

        <ul>
            <li><span class="bold">geboortedatum:</span> {member.birthdate}</li>
            <li><span class="bold">favoriete attribuut:</span> {member.fav_attribute}</li>
            <li><span class="bold">favoriete feature:</span> {member.fav_feature}</li>
            <li><span class="bold">favoriete property:</span> {member.fav_property}</li>
        </ul>
        
        <span><p>{member.fav_emoji}</p></span>
    </div>
</main>

<style>
    main {
        height: 100vh; 
        background-image: url("/background-image.png");
        background-size: cover;
    }

    .content {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        /* @media (width > 550px) {
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
    } */

    }


    .text-gradient {
        background-image: linear-gradient(to top, var(--dark-color-gradient), var(--light-color-gradient));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #FFFFFF);
        
    }
    .bold {
        font-weight: bold;
    }

    img {
        width: 80%;
    }
    ul {
        padding: 0;
        margin-top: 3em;
    }
    li {
        color: var(--text-color);
    }

    span {
        p {
            font-size: 2em;
        }
    }
    a {
        color: var(--text-color);
    }



</style>
    