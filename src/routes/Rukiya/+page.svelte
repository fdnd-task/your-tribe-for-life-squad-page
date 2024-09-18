<script>
    export let data; 

</script>

<section class="container_socials">
    <!-- Verborgen checkbox  -->
    <input type="checkbox" id="toggle" class="toggle-checkbox">
    
    <label for="toggle" class="button-socials">Socials</label>
    
    <!-- De content die verborgen/zichtbaar moet worden -->
    <div class="icons">
        <a href="/">
            <img src="/Github_icon.svg" alt="github icon">
        </a>
       <a href="/">
        <img src="/mail_icon.svg" alt="mail icon">
       </a>
    </div>
</section>

<style>
    .container_socials {
        display: flex;
       
    }

    .button-socials {
        border-radius: 0.4rem;
        padding:0 0.4rem;
        background-color: #66E5BF;
        border: none;
        margin-right: 0.5rem;
        display: inline;
        cursor: pointer;
    }

    .button-socials:hover {
        background-color: #4aa389;
    }
    
    /* Verberg de checkbox zelf */
    .toggle-checkbox {
        display: none;
    }

    /* Verberg standaard de icons */
    .icons {
        display: none;
    }

    /* laat de icons zien wanneer de button (checkbox)is gelkikt  */
    .toggle-checkbox:checked + .button-socials + .icons {
        display: block;
    }
</style>
