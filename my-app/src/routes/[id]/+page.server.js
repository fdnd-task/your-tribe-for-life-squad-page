export async function load({ url, params }) {
    // haalt alleen de member op voor de detailpagina
    const memberResponse = await fetch ("https://fdnd.directus.app/items/person/" + params.id);
    const memberData = await memberResponse.json();

    // returned deze data zodat we die in de .svelte view kunnen gebruiken
    return {member: memberData.data};
}


