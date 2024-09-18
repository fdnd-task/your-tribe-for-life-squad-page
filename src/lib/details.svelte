<script>
	import '../styles/deail.css';


export	let selectedPerson
export	let close
export let person;
	
</script>

<div class="modal" >
	<p>{selectedPerson.alt}</p>
	<p>{selectedPerson.id}</p>


	<button on:click={close}>Close</button>

	<section>
		<article class="p_info">
			<ul>
				<!-- <li class="name">{person.name} {person.surname}</li>
				<li>squad_id :{person.squad_id}</li>
				<li>fun fact {person.bio}</li> -->
			</ul>
		</article>
		<article class="p_img">
			<!-- <h1>Details img</h1> -->
			<img src="{selectedPerson.src}" alt="{selectedPerson.alt}-{selectedPerson.id}">

		</article>
		<article class="p_frame">
			<div>
				<!-- <p>iframe github or other</p> -->
				<!-- <a href={person.website}>
					website
					<iframe src={person.website}  frameborder="0"></iframe>
				</a> -->

			</div>
		</article>
	</section>

	<slot></slot>
</div>

<style>
section{
			display: flex;
			gap: 3%;
			padding-top: 3%;
		}
	
		article{
			flex: 1;
			/* outline: solid; */
		}
	
		.p_info ul{
			margin-left: 9%;
		}
	
		.p_info li:nth-of-type(1){
			font-size: 200%;
		}
		
	
		img{
			width: 100%;
		}
	
		.p_frame{
			display: flex;
			flex-direction: column;
			justify-content:end;
		}
	
		.p_frame div{
			width: 100%;
			height: 100%;
			
		}
	
		.p_frame a{
			display: flex;
			aspect-ratio: 1/1;
			justify-content: flex-end;
			/* outline: solid red; */
			
			
			& iframe{
				position: relative;
				border-radius: 50%;
				width: 50%;
				aspect-ratio: 1/1;
				place-self: end;
				z-index: -1;
				/* outline: solid; */
	
			}
	
			& iframe::after{
				content: '';
				position: absolute;
				inset: 0;
				z-index: 2;
				color: aqua;
			}
	
		}
	
		.p_frame:has(:hover) iframe::after{
			content: 'website';
		}

</style>