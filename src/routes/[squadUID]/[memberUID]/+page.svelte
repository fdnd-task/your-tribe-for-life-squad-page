<script>
  import { PrismicImage } from "@prismicio/svelte";
  import { page } from "$app/stores";
  $: squadpage = $page.params.squadUID;

  export let data;
</script>

<div class="container">
  <div class="title-container">
    <a href="/" class="title-link">FDND Squadpage</a>
    <a href="/{squadpage}" class="title-link">{squadpage}</a>
    <h1>{data.page.first_name} {data.page.last_name}</h1>
  </div>
  <div class="link-list">
    <a href="{data.page.github_link.url}" class="button">Github profile</a>
    <a href="{data.page.website.url}" class="button">Personal website</a>    
  </div>
</div>
<!-- <button class="back-to-top">test</button> -->

<style>
    /* deze min-hight zorgt er voor dat de tietle niet uit het scherm gaan. (screen breakpoint moeten apart gemaakt worden) */
    /* text op 40px is in hoogte 46px zo voor elke title laag is het ++++ de hoogte van de title */
    .title-container {
    min-height: 228px;
  }

  @media only screen and (min-width: 382px) {
    .title-container {
      min-height: 184px;
    }
  }

  @media only screen and (min-width: 418px) {
    .title-container {
      min-height: 138px;
    }
  }
</style>