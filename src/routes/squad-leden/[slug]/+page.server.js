import { createClient } from "$lib/prismicio";
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, request}){
    const client = createClient({fetch, request, params})
    // const document = await client.getAllByType('squadmembers');
    // console.log(document);
    const document  = await client.getByUID('squadoverview', 'squad-uid-a',{ fetchLinks: ['squadmembers.membername', 'squadmembers.squadname', 'squadmembers.memberimg', 'squadmembers.githublink'],});
    console.log(document)
    if(document){
        return { document }

    }
}

