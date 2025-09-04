<script>
    let { data } = $props(); // data die uit page.server.js komt word hier opgehaald om gebruikt te worden

    const member = data.member; 
</script>
<main>
    <a href="/">Terug naar home</a>
        <h1 class="text-gradient">{member.name.split(' ')[0]}</h1>
        <img src="https://fdnd.directus.app/assets/{member.mugshot}" alt="portret {member.name}">

        <ul>
            <li>geboortedatum: {member.birthdate}</li>
            <li>favoriete attribuut: {member.fav_attribute}</li>
            <li>favoriete feature: {member.fav_feature}</li>
            <li>favoriete property: {member.fav_property}</li>
        </ul>
        
        <span><p>{member.fav_emoji}</p></span>
</main>

<style>
    main {
        /* background-image: linear-gradient(150deg, var(--light-color-gradient), var(--dark-color-gradient)); */
        height: 100vh; 
        /* background-color: var(--light-color-gradient); */
        /* background-image: radial-gradient(var(--light-color-gradient), #7CC1C1); */
        background-image: url("/background-image.png");
    }

    .text-gradient {
        background-image: linear-gradient(to top, var(--dark-color-gradient), var(--light-color-gradient));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #FFFFFF);
        
    }

    img {
        width: 80%;

    }
    ul {
        padding: 0;
    }
    li, h1 {
        color: var(--dark-color-gradient);
    }
    span {
        p {
            font-size: 2em;
        }
    }

       



</style>
    