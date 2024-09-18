<main class="gallery">
    <section class="gallery__video">
        <h1 class="gallery__h1">Gallery profile cards</h1>
        <div class="video-wrapper">
            <video autoplay loop muted>
                <source src="/videos/eersteProfileCard.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay loop muted>
                <source src="/videos/tweedeProfileCardJSON.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <footer class="gallery__footer">
            <p>© Lesley, Akiko, Rukiya, Zainab & Eef</p>
        </footer>
    </section>
</main>

<style>
html, body {
    margin: 0;
    height: 100%;
}

main {
    color: var(--color-main-text);
}

.gallery__video {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.video-wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 200vh; 
}

video {
    width: 100vw;   
    height: 100vh;  
    object-fit: cover; 
}

.gallery__h1 {
    position: fixed; 
    top: 20px;
    left: 20px;
    z-index: 10;
}

.gallery__footer {
    position: fixed; 
    bottom: 20px;
    left: 20px;
}
</style>
