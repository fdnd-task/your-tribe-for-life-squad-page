import { createClient } from '$lib/prismicio';

export const prerender = true;

// position of parameters matters
export async function load({fetch, request, params}) {
	const client = createClient();

	// page fetch
	const page = await client.getByUID('member', params.uid);
	// const page = await client.getByUID('page', 'home');
	return page.data
}
