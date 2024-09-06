<script>
  import Package from '$lib/package/Package.svelte';
	// export let data;
</script>

<h1>FDND</h1>

<Package 
  colors={{
    topLeft: "#f0d0a3",
    topRight: "#f0d0a3",
    left: "#7d6b52",
    right: "#debd8e",
    front: "#e3c496",
    back: "#7d6b52",
    border: "#c9a574",
  }}
  size={8}
  rotation={{x: "-10deg", y: "-15deg"}}
  squad={"Squad C"} 
  href={"/squad-c"}
/>

<Package size={6}
rotation={{x: "-10deg", y: "15deg"}}
squad={"Squad D"} href={"/squad-d"} />

<style>
  h1 {
    margin-left: auto;
    margin-right: auto;
    }
</style>