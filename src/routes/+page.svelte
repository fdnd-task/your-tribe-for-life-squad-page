<script>
    export let data;
  </script>
  
  <h1>squadpage</h1>
  
  <ul>
    {#each data.persons as person}
      <li>
        {person.name}
        {person.prefix}
        {person.surname}
      </li>
    {/each}
  </ul>
  
  
  <style>
      li {
          list-style: "";
      }
  </style>