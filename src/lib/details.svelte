<script>
	import '../styles/deail.css';


export	let selectedPerson
export	let close
	
</script>

<div class="modal" >
	<p>{selectedPerson.alt}</p>
	<p>{selectedPerson.id}</p>
	<button on:click={close}>Close</button>
	<slot></slot>
</div>