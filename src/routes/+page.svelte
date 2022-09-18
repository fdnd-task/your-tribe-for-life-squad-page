<script>
	import {fade} from 'svelte/transition'
	import * as prismicH from '@prismicio/helpers'
  export let data
  console.log(data)

	// const images = [{
  //   url: 'https://picsum.photos/id/237/400/300'
  // }, {
  //   url: 'https://picsum.photos/id/238/400/300'
  // },{
  //   url: 'https://picsum.photos/id/240/400/300'
  // }]

	const images = [
		data.member, 
		data.memberTwo, 
		data.memberThree 
	]

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
	<section class="hero">
		<h1>FDND Squadpage</h1>
		{#each [images[currentSlideItem]] as item (currentSlideItem)}
			<iframe src="{item.github.url}" title="{item.name}" frameBorder="0"></iframe>
    	<!-- <img src={item.image.url} alt='' /> -->
		{/each}
	</section>

	<section>
		<article class="remote-control">
			<h2>FDND Studenten afstandsbediening</h2>
			<div class="remote-control__buttons">
				<button class="btn btn--blue btn--left" on:click={() => prevImage()}>Vorige</button>
				<button class="btn btn--blue btn--right" on:click={() => nextImage()}>Volgende</button>
			</div>
			<img class="remote-control__logo" src="/philips-logo.svg" alt="">
		</article>

		<article>
			<!-- <pre>{JSON.stringify(data.member, null, 2)}</pre> -->
			<!-- <h2>{data.member.name}</h2> -->
			<!-- <h2>{data.memberTwo.name}</h2> -->
			<!-- <img src="{data.member.image.url}" alt=""> -->
		</article>
	</section>
</main>