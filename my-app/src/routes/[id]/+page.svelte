<script>
    let { data } = $props(); // data die uit page.server.js komt word hier opgehaald om gebruikt te worden

    const member = data.member; 
</script>

<a href="/">Terug naar home</a>
<h1>Detailpagina van {member.name}</h1>