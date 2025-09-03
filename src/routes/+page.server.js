export async function load({ url }) {
  const members = await fetch(
    "https://fdnd.directus.app/items/person?fields=name,profilecard,mugshot,birthdate&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202"
  );

  const { data: membersData } = await members.json();

  // Loop om mugshot data te verkrijgen & aan de bestaande (membersData) te koppelen
  // Wacht tot alle mugshot data verkregen is voordat we verdergaan
  await Promise.all(
    membersData.map(async (member) => {
        // Fetch mugshot data
      const mugshotResponse = await fetch(
        `https://fdnd.directus.app/files/${member.mugshot}`
      );

      // Verwerk de mugshot data
      const { data: mugshotData } = await mugshotResponse.json();

      // Koppel de mugshot data aan de bestaande (membersData) als een object
      member.mugshot = {
        src: `https://fdnd.directus.app/assets/${member.mugshot}?height=320&quality=80`,
        width: mugshotData?.width ?? null,
        height: mugshotData?.height ?? null,
      };
    })
  );

  return { membersData };
}
