<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);


    import CardComponent from "$lib/card-component.svelte";

    // import Topbar from '../lib/Topbar.svelte';
 

  
    const imgSrcs = ['/images/2D2A8708-B2FC-418D-967C-F21EC6D2E020_1_102_o.jpeg'];
    
</script>

<style>



</style>
{#each imgSrcs as imgSrc}
        <CardComponent imgSrc={imgSrc}></CardComponent>
    {/each}
        