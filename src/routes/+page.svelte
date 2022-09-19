<script>
	export let data
  console.log(data.documents)

	const images = data.documents

  let currentSlideItem = 0;

	const nextImage = () => {
    currentSlideItem = (currentSlideItem + 1) % images.length;
  }

	const prevImage = () => {
    if (currentSlideItem != 0) {
        currentSlideItem = (currentSlideItem - 1) % images.length;
    } else {
        currentSlideItem = images.length - 1;
    }
  }
</script>

<main>
	{#each [images[currentSlideItem]] as data (currentSlideItem)}
		<iframe src="{data.data.businesscard.url}" title="{data.data.name}" frameBorder="0"></iframe>
	{/each}

	<section>
		<article class="remote-control">
			<h2>FDND Studenten afstandsbediening</h2>
			<div class="remote-control__buttons">
				<button class="btn btn--blue btn--left" on:click={() => prevImage()}>Vorige</button>
				<button class="btn btn--blue btn--right" on:click={() => nextImage()}>Volgende</button>
			</div>
			<img class="remote-control__logo" src="/philips-logo.svg" alt="">
		</article>
		<pre>{JSON.stringify(data.documents, null, 2)}</pre>
	</section>
</main>