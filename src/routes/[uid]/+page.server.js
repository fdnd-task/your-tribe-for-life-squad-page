import { createClient } from '$lib/prismicio';

export const prerender = true;

// position of parameters matters
export async function load({fetch, request, params}) {
	const client = createClient();

	// page fetch
	const page = await client.getByUID('member', params.uid);
	const page1 = await client.getByUID('page', 'home');

	let allData = {
		data1: page.data,
		data2: page1.data
	}

	return allData
}
