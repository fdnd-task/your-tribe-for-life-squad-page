<script>
    // haalt de data op vaniut de .server.js
    let { data } = $props();

    // zet de members uit de database in een const
    const member = data.member
</script>

<!-- hier kan je dus member.name gebruiken door de const member -->
<h1>{member.name}</h1>
<a href="/">terug naar home</a>