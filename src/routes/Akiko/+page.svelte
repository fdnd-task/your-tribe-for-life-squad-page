 <body> 
	<!-- <a href="/">back</a>  -->

	<div class="achtergrondblokje"></div>
	<div><h1>AKIKO SCHERMER</h1></div>

	<!-- <img src="/favicon.png" class="student" alt="Akiko" /> -->

	<!-- <article>
		<h2>About me</h2>
		<p class="text">
			Hi, Ik ben Akiko Schermer, Ik woon in Amstelveen. Momenteel volg ik de studie Frontend-end
			Development & Design
		</p>
	</article> -->
<!-- 
	<a href="/" class="socials"> Socials</a> -->
</body>

<style>
	:root {
		--color-main-bg: #050542;
		--color-main-text: #66e5bf;
		--color-bg-block: #53b8a6;
	}
/* 
	a {
		color: var(--color-main-text);
		text-decoration: none;
		margin-top: 20px;
        margin-left: 10px;
	} */

	h1 {
        font-family:'Koulen', sans-serif ;
        font-weight: 500;
        font-size: 1.5em;
		text-align: center;
        max-width: 100%;
        word-wrap: break-word;
        margin-top: 30px;
	}

	div {
		background-color: var(--color-main-text);
		color: var(--color-main-bg);
		width: 220px;
		height: 48px;
		position: relative;
		z-index: 2;
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 3px;
	}

	div.achtergrondblokje {
		background-color: var(--color-bg-block);
		color: var(--color-main-text);
		width: 220px;
		height: 45px;
		position: absolute;
		transform: rotate(-8deg);
		z-index: 1;
		top: 30px;/* top: 58px;   */
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 3px;
	}
/* 
	h2 {
        font-family:'Koulen', sans-serif ;
        font-weight: 500;
		padding-left: 5px;
		border-radius: 5px;
		background-color: var(--color-main-text);
		color: var(--color-main-bg);
	}

	article {
		background: white;
		border-radius: 5px;
		height: 350px;
        width: 280px;
        margin-left: auto;
		margin-right: auto;
	}

	p.text {
        font-family:'Open Sans', sans-serif ;
        font-weight: 600;
        font-size: 1em;
		color: var(--color-main-bg);
		margin-left: 20px;
		margin-right: 20px;
	}

	a.socials {
		background-color: var(--color-main-text);
		color: var(--color-main-bg);
		width: 100px;
		height: 25px;
		border-radius: 5px;
		text-align: center;
	}

	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.student {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 50%;
		margin-top: 1em;
		margin-bottom: 1em;
	} */

</style>
