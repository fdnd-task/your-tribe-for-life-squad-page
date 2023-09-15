<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	export let data;
</script>

<header>
<h1>{data.title}</h1>
<p>{data.introtext}</p>
</header>

<main>
<section> 
    <a href="/SquadPage">A</a>
    <SliceZone slices={data.slices} {components} />
</section>
<section> 
    <a href="/SquadPage">B</a> 
    <SliceZone slices={data.slices} {components} />
</section>
</main>

<style>
    header h1 {
    font-size: 6rem;
    text-align: center; 
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-direction: column;  
    }

    section {
        background-color: green;
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
</style>