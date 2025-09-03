export async function load ({ url }) {
    const membersResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND%20Jaar%201"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}');
    const membersData = await membersResponse.json();
    console.log(membersResponse)



    return {members: membersData.data}

    //hier komt het fetchen van data check oude server.js met alles

    // return {members: membersData.data} // Return hier dus de data (Dit is geen render)
}