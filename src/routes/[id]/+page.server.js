export async function load({url, params}){
    console.log(params.id);
    
    const member = await fetch(`https://fdnd.directus.app/items/person/${params.id}`)

    const {data: memberData} = await member.json();

    return {memberData};
}