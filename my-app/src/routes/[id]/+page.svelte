<script>
    // haalt de data op vaniut de .server.js
    let { data } = $props();

    // zet de members uit de database in een const
    const member = data.member
</script>

<!-- hier kan je dus member.name gebruiken door de const member -->
<body>
    <h1>{member.name}</h1>
    <img src="{member.mugshot}" alt="portret {member.name}">

    <ul>
        <li>geboortedatum: { member.birthdate }</li>
        <li>favoriete attribuut: { member.fav_attribute }</li>
        <li>favoriete feature: { member.fav_feature }</li>
        <li>favoriete land: { member.fav_country }</li>
    </ul>

    <div><p>{ member.fav_emoji }</p></div>
    <a href="/">terug naar home</a>
</body>


<style>
    /* body {
        background-image: linear-gradient(180deg, #0D3131, #289797);
        height: 100vh;
    } */
</style>