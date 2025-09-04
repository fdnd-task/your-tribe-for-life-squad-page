<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    // console.log(data);
    const student = data.student;
</script>

<a href="/">Back to flipbook</a>

<section id="polaroid">
    <article id="photo_n_name">
        {#if student.avatar === null}
          <img src="src/lib/assets/github_logo.png" alt="Placeholder avatar" width="250px" height="250px"/>
        {:else}
          <img src="{student.avatar}" alt="{student.name}'s avatar" width="250px" height="250px"/>
        {/if}
        <h1>{student.name}</h1>
    </article>

    <article id="details">
        <h2>Details</h2>

        <ul>
            <li><a href="https://github.com/{student.github_handle}">{student.github_handle}</a></li>

            <!-- als er geen favoriete kleur is -->
            {#if student.fav_color === null}
                <li>Kleurloos</li>
            <!-- als er wel een favoriete kleur is -->
            {:else}
                <li>{student.fav_color}</li>
            {/if}

            <!-- als er geen geboortedatum is -->
            {#if student.birthdate === null}
                <li>Geboorteloos</li>
            <!-- als er wel een geboortedatum is-->
            {:else}
                <li>{student.birthdate}</li>
            {/if}

            {#if student.fav_animal === null}
                <li>Dierloos</li>
            {:else}
                <li>{student.fav_animal}</li>
            {/if}
        </ul>
    </article>
</section>

<style>
    #back {
        width: 8em;
        height: 2em;
        border-radius: 25px;
        background-color: #66E5BF;
        margin: 0;
        gap: 20px;
    }

    article {
        background-color: white;
        width: 300px;
        height: 400px;

        align-items: center;
        justify-content: center;
    }
</style>