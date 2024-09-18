<script>
    export let imgSrc; // Ontvang de imgSrc prop
</script>



<style>
    img {
        transition: filter .3s ease, transform .50s ease; /* Zachte overgang */
        cursor: pointer;
    }

    img:hover {
        transform: translateY(-15px); /* Laat de afbeelding omhoog bewegen bij hover */
        box-shadow: -5px 0 50px rgba(255, 255, 255, 0.5); /* Witte schaduw */
        filter: grayscale(0); /* Kleur terugbrengen bij hover */
        scale: 1.02; /* Beetje vergroten bij hover */
    }

</style>

    <img class='image-card' src={imgSrc} alt="">



    