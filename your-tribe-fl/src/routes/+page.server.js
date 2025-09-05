export async function load({url}) {
    const membersResposnse = await fetch('https://fdnd.directus.app/items/squad?sort=name&fields=persons.*,persons.person_id.*&filter[cohort][_eq]=2526')
    const membersData = await membersResposnse.json();

    const members = membersData.data.flatMap(squad =>
        squad.persons.map(p => p.person_id)
    );

    return {
        members
    };
}