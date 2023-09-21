import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const page = await client.getSingle('homepage')
    const squads = await client.getAllByType('squad')

    return { page: page.data, squads: squads }
}