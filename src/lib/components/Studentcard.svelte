
<script>
    let { member } = $props();
</script>

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

<style>
    li {
        flex: 0 0 auto; /* zorgt dat de li'tjs hun eigen breedte houden */
        width: 140px;
        height: 200px;
        border-radius: 1em;
        overflow: hidden;
        scroll-snap-align: center;
        scroll-margin-inline: 50%;
        background: none;
        padding: 0;
    a {
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
    a img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 0;
        display: block;
        transition: filter 0.2s;
        border-radius: 1em;
    }
    a p {
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
    a:hover p,
    a:focus-visible p {                      
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    a:focus-visible img {
        border: 2px solid rgb(222, 255, 122);
    }
}
</style>