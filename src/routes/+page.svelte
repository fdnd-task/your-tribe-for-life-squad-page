<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);

    import Example from '../components /example.svelte';
    
</script>

<style>
    body {
		height: 100vh;
		width: 100vw;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        background-image: linear-gradient(180deg, #B285E5 10%, #660BCC 33%, #4C0899 58%, #000000 97%);
    }

    nav {
        display: flex; 
    }


</style>

<body>
    <nav>
        <Logo />

        <ThemeSwitchBtn />

        <NavigationMenu /> 
    </nav>

    section
</body>


