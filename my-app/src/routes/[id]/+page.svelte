<script>
    let { data } = $props(); // data die uit page.server.js komt word hier opgehaald om gebruikt te worden

    const member = data.member; 
</script>
<main>
    <a href="/">Terug naar home</a>
        <h1>{member.name.split(' ')[0]}</h1>
        <img src="https://fdnd.directus.app/assets/{member.mugshot}" alt="portret {member.name}">

        <ul>
            <li>geboortedatum: {member.birthdate}</li>
            <li>favoriete attribuut: {member.fav_attribute}</li>
            <li>favoriete feature: {member.fav_feature}</li>
            <li>favoriete property: {member.fav_property}</li>
        </ul>
        
        <span>{member.fav_emoji}</span>
</main>

