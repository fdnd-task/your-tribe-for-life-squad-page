import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load() {
	const client = createClient();

	// page fetch
	const page = await client.getByUID('page', 'home', {'fetchLinks': ['member.title', 'member.image']});

	return page.data
}
