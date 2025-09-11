<script>
    import squadpageSvg from '$lib/assets/squadpage.svg';
    import menuSvg from '$lib/assets/menu.svg'; // menu icon
    import Header from '$lib/components/Header.svelte';
    import avatar from '$lib/assets/default-avatar.png';
    import squad2e from '$lib/assets/squad2e.svg';
    import squad2f from '$lib/assets/squad2f.svg';

    // Data uit +page.server.js
    let { data } = $props();
    const members = data.members;
</script>

<Header />
<main class="squadpage">

    <div class="squadpage-classes">
        <a href="/squad2e">
            <img src={squad2e} alt="squad 2E icon" width="175" height="auto">
        </a>
        <a href="/squad2f">
            <img src={squad2f} alt="squad 2F icon" width="175" height="auto">
        </a>
    </div>

    <ul class="students-grid">
        {#each members as member}
            <li>
            <article class="card">
                <div class="avatar">
                <img src={member.avatar ? member.avatar : avatar } alt={`Mugshot of ${member.name}`} width="130" height="auto" /> <!--standaard avatar als er geen avatar is --> 
                </div>
                <a class="name" href={`/members/${member.id}`}>{member.name}</a>
            </article>
            </li> 
        {/each}
        </ul>
</main>
