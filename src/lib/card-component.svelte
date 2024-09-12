<script>
    export let imgSrc; // Ontvang de imgSrc prop
</script>

<style>

    img {
        position: absolute;
        border-radius: 1.2em;
        filter: grayscale(100%); /* 100% maakt de afbeelding volledig zwart-wit */
        transition: ease 1s; 
        cursor: pointer;
    }

    img:hover {
    transform: translateY(-15px); 
    box-shadow: -5px 0 100px rgba(255, 255, 255, 0.5);
    filter: grayscale(0);
    scale: 1.02;
}

 
</style>

<!-- Card Structure -->

    <img class='image-card' src={imgSrc} alt="squad member" height="400" width="230">
    