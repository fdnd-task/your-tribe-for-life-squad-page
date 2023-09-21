<script>
  import { page } from "$app/stores";
  $: squadpage = $page.params.squadUID;

  export let data;
</script>

<a href="/">FDND Squadpage</a>
<a href="/{squadpage}">{squadpage}</a>
<h1>{data.page.first_name}</h1>
