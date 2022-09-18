import { error } from '@sveltejs/kit'

import createClient from '$lib/prismicio'

export async function load({ fetch, request }) {
    const UID = '1'
    const UIDTWO = '2'
    const UIDTHREE = '3'
    const client = createClient({ fetch, request })
    const member = await client.getByUID('members', UID)
    const memberTwo = await client.getByUID('members', UIDTWO)
    const memberThree = await client.getByUID('members', UIDTHREE)

    if (member) {
        return { 
          member: member.data,
          memberTwo: memberTwo.data,
          memberThree: memberThree.data
        }
    }

    error(404, 'Not found')
}