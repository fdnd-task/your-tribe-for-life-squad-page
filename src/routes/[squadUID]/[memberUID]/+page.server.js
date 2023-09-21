import { createClient } from "$lib/prismicio";

export async function load({ fetch, request, params }) {
  let { memberUID } = params;
  let { squadUID } = params;
  const client = createClient({ fetch, request });

  const page = await client.getByUID("member", memberUID);

  if (page.data.squad_link.uid === squadUID) return { page: page.data };
}
