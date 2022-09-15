<script>
	const screenPhotos = [
		'https://picsum.photos/300/200?random=1',
		'https://picsum.photos/300/200?random=2',
		'https://picsum.photos/300/200?random=3',
		'https://picsum.photos/300/200?random=4'
	]

	let currentPhotoIndex = 0
  
  const next = () =>
  currentPhotoIndex = (currentPhotoIndex + 1) % screenPhotos.length
</script>

{#each screenPhotos as photo, index}
	{#if index == currentPhotoIndex}
		<img src={photo} alt="" />
	{/if}
{/each}
<button on:click={next}>Volgende</button>

<style>
  button {
    padding: 1em;
    background-color: grey;
  }
</style>