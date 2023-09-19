import { createClient } from "$lib/prismicio";
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, request}){
    const client = createClient({fetch, request})
    const document = await client.getAllByType('squadmembers');
    // console.log(document);
    // const haha  = await client.getByUID('squads', 'UID');
    // console.log(haha)
    if(document){
        return { document }

    }
}

