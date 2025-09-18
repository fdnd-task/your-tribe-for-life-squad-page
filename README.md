# SQUADPAGE jaar 2 - Matthijs & Jules

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## INSTALLATIE
### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.



## HET PROJECT
De opdracht was om met Svelte en SvelteKit een squadpage te bouwen met een detailpagina. Dit hebben wij dan ook gedaan. Verder hebben we hierbij nog gebruik gemaakt van het werken met componenten. Layouts kon ook gebruikt worden, maar was niet van toepassing op onze website. We zijn begonnen met het bekijken van de data, hierbij een ontwerp gemaakt en toen zijn we langzaam aan gaan bouwen. 



## ONTWERPKEUZES
Uitgebreid is er over het ontwerp gepraat in dit issue. We zijn begonnen met het toepassen van gradiënts. Uiteindelijk was dit voor ons nog een beetje te simpel, er ontbrak wat. Dus hebben we ervoor gekozen een andere achtergrond toe te passen en de gradiënts door te trekken in de teksten. Uiteraard hebben we het ook responsive gebouwd. 


<img width="250" height="831" alt="Screenshot 2025-09-18 at 10 23 28" src="https://github.com/user-attachments/assets/a6a9eff0-6928-4668-a545-10293d9404f9" />
<img width="750" height="831" alt="Screenshot 2025-09-18 at 10 23 00" src="https://github.com/user-attachments/assets/ec7d0ee4-7e93-47ef-b3da-1aa3885e2500" />

<img width="250" height="831" alt="Screenshot 2025-09-18 at 10 23 45" src="https://github.com/user-attachments/assets/c5179d41-4e93-46d7-a9e1-70f1ec05f5ad" />
<img width="750" height="831" alt="Screenshot 2025-09-18 at 10 23 55" src="https://github.com/user-attachments/assets/0fc78e5f-bd7e-4e5e-9a2c-783c506d89b8" />



## FUNCTIONALITEITEN

<details>
  <summary> COMPONENT </summary>
In onze code is er gebruik gemaakt van een component. De persoon + naam komt namelijk telkens terug. 

  ```
<script>
    import avatar from '$lib/assets/noname.webp';
    let { member } = $props();
</script>

<li>
    <a href="/{member.id}">
        <!-- Als de member een mugshot heeft gebruik hetgene na de ? anders gebruik de ding na de " : " -->
        <img
            src={member.mugshot ? `https://fdnd.directus.app/assets/${member.mugshot}?width=140&height=200` : avatar}
            alt={`portret ${member.name}`}
            height="200"
            width="140"
        />
        <p>{member.name}</p>
    </a>
</li>
```
  
</details>
<details>
  <summary> LOAD function </summary>

Er wordt data opgehaald door middel van een load function. Er volgt een fetch van de persoon met de bijbehorende ID dat je hebt meegekregen vanaf de homepagina naar de detailpagina. Dit wordt omgezet in JSON, dit is als het ware 'taal' die wij kunnen we gebruiken. De return wordt gebruikt, zodat we de data ook daadwerkelijk in onze Svelte en dus code kunnen gaan verwerken. 

  ```
export async function load({ url, params }) {
    // haalt alleen de member op voor de detailpagina
    const memberResponse = await fetch ("https://fdnd.directus.app/items/person/" + params.id);
    const memberData = await memberResponse.json();


    // returned deze data zodat we die in de .svelte view kunnen gebruiken
    return {member: memberData.data};
}
```
</details>
