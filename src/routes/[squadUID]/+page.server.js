import * as prismic from "@prismicio/client";
import { createClient } from "$lib/prismicio";

export async function load({ fetch, request, params }) {
  let { squadUID } = params;
  const client = createClient({ fetch, request });

  const page = await client.getByUID("squad", squadUID);
  const members = await client.getAllByType("member", {
    filters: [prismic.filter.at("my.member.squad_link", page.id)],
    orderings: {
      field: "my.member.first_name, my.member.last_name",
      direction: "asc",
    },
  });

  return { page: page.data, members: members };
}
