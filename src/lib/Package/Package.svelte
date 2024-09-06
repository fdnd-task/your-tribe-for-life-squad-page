<script>
  import PackageIcon from './PackageIcon.svelte';
  export let squad;
  export let href;
  export let colors;
  export let rotation;
  export let size;
</script>

<a href={href}>
  <PackageIcon colors={colors} rotation={rotation} size={size}/>
  <h2>{squad}</h2>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin: 1rem;
    height: 24rem;
    width: 24rem;
  }
</style>