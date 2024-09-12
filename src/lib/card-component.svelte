<script>
    export let imgSrc; // Ontvang de imgSrc prop
</script>





<style>
    img {
        border-radius: 1.2em;
        filter: grayscale(100%);
        transition: filter 1s ease, transform 0.3s ease; /* Zachte overgang */
        cursor: pointer;
    }

    img:hover {
        transform: translateY(-15px); /* Laat de afbeelding omhoog bewegen bij hover */
        box-shadow: -5px 0 100px rgba(255, 255, 255, 0.5); /* Witte schaduw */
        filter: grayscale(0); /* Kleur terugbrengen bij hover */
        scale: 1.02; /* Beetje vergroten bij hover */
    }

</style>


<!-- Card Structure -->

    <img class='image-card' src={imgSrc} alt="squad member" height="400" width="230">


    