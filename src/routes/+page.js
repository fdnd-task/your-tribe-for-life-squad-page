import { error } from '@sveltejs/kit'

import createClient from '$lib/prismicio'
import { dataset_dev } from 'svelte/internal'

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request })
    const documents = await client.getAllByType('members')

    if (documents) {
        return { 
          documents
        }
    }

    error(404, 'Not found')
}