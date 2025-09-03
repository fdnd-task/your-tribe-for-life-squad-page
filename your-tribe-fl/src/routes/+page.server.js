export async function load({url}) {
    const membersResposnse = await fetch('https://fdnd.directus.app/items/person/?filter[name][_starts_with]=R')
    const membersData = await membersResposnse.json();

    return {
        members: membersData.data
    };
}