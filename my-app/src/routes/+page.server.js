export async function load({ url }) {
    // haalt alle members op uit de database van jaar 25-26 jaar 2
    const membersResponse = await fetch ("https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202&sort=name");
    const membersData = await membersResponse.json();
    
    // returned deze data zodat we deze in de .svelte view kunnen gebruiker
    return {members: membersData.data};
}
