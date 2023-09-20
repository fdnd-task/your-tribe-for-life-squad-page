import { createClient } from "$lib/prismicio";
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, request, params}){
    const client = createClient({fetch, request})
    // const document = await client.getAllByType('squadmembers');
    // console.log(document);
    console.log(params.slug)

    if(params.slug === "squadA"){
        const document  = await client.getByUID('squadoverview', 'squad-uid-a' ,{ fetchLinks: ['squadmembers.membername', 'squadmembers.squadname', 'squadmembers.memberimg', 'squadmembers.githublink'],});
        console.log(params.slug)
        return { document }
    }
    else if(params.slug === "squadB"){
        const document  = await client.getByUID('squadoverview', 'squad-uid-b' ,{ fetchLinks: ['squadmembers.membername', 'squadmembers.squadname', 'squadmembers.memberimg', 'squadmembers.githublink'],});
        console.log(params.slug)
        return { document } 
    }
    if(document){
        return { document }

    }
}

