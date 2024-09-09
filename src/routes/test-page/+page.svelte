<script>
	import Details from '../../component detailpage/details.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let showModal = false;
    const toggle = () =>{
		showModal = !showModal;
	}
    // Check if the data has been received and is an array
    // console.log("Received data in +page.svelte:", data);
</script>

<!-- Only render if we have people in the data -->
{#if data.people}
    {#each data.people as person}
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
    {/each}
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}

{#if 10 > 2}
	<p>10 bigger</p>
	<Details peeps="im the peep" showModal={showModal} on:click={toggle}>
		<section>
			<article>
				<ul>
					<li>name</li>
					<li>age</li>
					<li>fun fact</li>
				</ul>
			</article>
			<article>
				<h1>Details img</h1>
				<img src="" alt="">

			</article>
			<article>
				<div>
					<p>iframe github or other</p>
					<iframe src="" frameborder="0"></iframe>
				</div>
			</article>
		</section>
	</Details>
{/if}

<button on:click={toggle} > open modal

</button>






