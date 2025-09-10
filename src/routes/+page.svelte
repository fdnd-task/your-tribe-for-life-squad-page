    <script>
        let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

        // Zet de members uit de data in een constante
        const members = data.members;
        const members2 = data.members2;
    </script>

    <main>
        <h1 class="text-gradient">SQUADPAGE</h1>

        <h2>SQUAD 2E</h2>
        <ul>
            <!-- voor elke member in members maak een li -->
            {#each members as member}
                <li>
                    <a href="/{member.id}">
                        <!-- als iemand geen mugshot heeft word die vervangen door noname.webp -->
                        <img
                            src={`https://fdnd.directus.app/assets/${member.mugshot}?width=140&height=200`}
                            alt={`portret ${member.name}`}
                            height="200"
                            width="140"
                            onerror={(e) => (e.currentTarget.src = "/noname.webp")}
                        />
                        <p>{member.name}</p>
                    </a>
                </li>
            {/each}
        </ul>

        <h2>SQUAD 2F</h2>
        <ul>
            <!-- voor elke member2 in members2 maak een li -->
            {#each members2 as member2}
                <li>
                    <a href="/{member2.id}">
                        <!-- als iemand geen mugshot heeft word die vervangen door noname.webp -->
                        <img
                            src={`https://fdnd.directus.app/assets/${member2.mugshot}?width=140&height=200`}
                            height="200"
                            width="140"
                            alt={`portret ${member2.name}`}
                            onerror={(e) => (e.currentTarget.src = "/noname.webp")}
                        />
                        <p>{member2.name}</p>
                    </a>
                </li>
            {/each}
        </ul>

    </main>

    <style>
        /* Main font */
        @font-face {
            font-family: "Monomaniac One";
            src: url("/fonts/MonomaniacOne-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
        }

        /* Secondary font */
        @font-face {
            font-family: "Exo 2";
            src: url("/fonts/Exo2-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
        }

        main {
            height: 100vh;
            width: 100%;
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 1fr 2fr 1fr 2fr 1fr;
            grid-template-areas: 
                "squad2e"
                "list2e"
                "titel"
                "list2f"
                "squad2f";
            background-image: url("/background-image.webp");
            background-size: cover;
            overflow-y: hidden;
        }

        h1 {
            margin: 0.25em;
            padding: 0;
            text-align: center;
            font-family: "Monomaniac One", sans-serif;
            letter-spacing: 0.05em;
            font-size: clamp(3em, 5vw, 5.5em);
            grid-area: titel;
        }

        .text-gradient {
            background-image: linear-gradient(to top, var(--dark-color-gradient), var(--light-color-gradient));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(2px 2px #FFFFFF);
        }

        h2 {
            margin: 0;
            padding: 0;
            font-family: "Exo 2", sans-serif;
            color: var(--text-color);
            font-size: 2em;
        }

        h2:nth-of-type(1) {
            position: absolute;
            left: 50%;
            top: 5%;
            transform: translateX(-50%);
            text-align: center;
            grid-area: squad2e;
        }

        h2:nth-of-type(2) {
            position: absolute;
            left: 50%;
            bottom: 5%;
            transform: translateX(-50%);
            text-align: center;
            grid-area: squad2f;
        }

        /* https://css-tricks.com/css-only-carousel/ */
        ul {
            display: flex;
            justify-content: flex-start;
            gap: 2em;
            list-style: none;
            padding: 0 1.5em;
            margin: 0;
            scroll-snap-type: x mandatory;

            overflow-x: auto;
            scroll-behavior: smooth;
            margin-left: 1.5em;

            & li {
                flex: 0 0 auto; /* zorgt dat de li'tjs hun eigen breedte houden */
                width: 140px;
                height: 200px;
                border-radius: 1em;
                overflow: hidden;
                scroll-snap-align: center;
                scroll-margin-inline: 50%;
                background: none;
                padding: 0;
                & a {
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    text-decoration: none;
                    :hover {
                        filter: brightness(1.1);
                    }
                }
                & a img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    margin-bottom: 0;
                    display: block;
                    transition: filter 0.2s;
                    border-radius: 1em;
                }
                & a p {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    margin: 0;
                    padding: 0.5em 0;
                    background-color: #257070;
                    color: white;
                    font-weight: bold;
                    font-size: 1em;
                    text-align: center;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(100%);
                    transition:
                        opacity 0.2s,
                        transform 0.2s;
                    pointer-events: none;
                }
            :hover {
                filter: brightness(1.05);
            }
        }
        }
        ul:nth-of-type(1) {
            grid-area: list2e;
            mask-image: linear-gradient(to left, transparent 5%, black 35%);
            @media (min-width: 670px) {
                mask-image: linear-gradient(to left, transparent 5%, black 25%);
            }
        }
        ul:nth-of-type(2) {
            grid-area: list2f;
            margin-right: 1.5em;
            scroll-snap-type: none;
            flex-direction: row-reverse; /* maakt dat deze rij van rechts naar links scrollt */
            justify-content: flex-start;
            mask-image: linear-gradient(to right, transparent 5%, black 35%);
            @media (min-width: 670px) {
                mask-image: linear-gradient(to right, transparent 5%, black 25%);
            }
        }

        ul::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge (Blink/WebKit) */
        }


        a:hover p,
        a:focus-visible p {                      
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }

        a:focus-visible img {
            border: 2px solid rgb(222, 255, 122);
        }
    </style>
