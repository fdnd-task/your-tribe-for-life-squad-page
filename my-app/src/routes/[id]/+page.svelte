<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    // console.log(data);
    const student = data.student;
</script>

<a href="/">Back to flipbook</a>

<section id="polaroid">
    <article>
        <img src="{student.avatar}" alt="{student.name}'s avatar" width="250px"/>
        <h1>{student.name}</h1>
    </article>

    <article>
        <h2>Details</h2>

        <ul>
            <li><a href="https://github.com/{student.github_handle}">{student.github_handle}</a></li>
            <li>{student.fav_color}</li>
            <li>{student.birthdate}</li>
            <li>{student.fav_kitchen}</li>
        </ul>
    </article>
</section>

