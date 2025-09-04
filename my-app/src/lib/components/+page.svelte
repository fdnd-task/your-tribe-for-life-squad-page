<script>
    let { data } = $props();
    console.log(data);
    const members = data.members;

    import { onMount } from "svelte";

    // The function is defined here
    const flipBook = (elBook) => {
        elBook.style.setProperty("--c", 0);
        elBook.querySelectorAll(".page").forEach((page, idx) => {
            page.style.setProperty("--i", idx);
            page.addEventListener("click", (evt) => {
                if (evt.target.closest("a")) return;
                const curr = evt.target.closest(".back") ? idx : idx + 1;
                elBook.style.setProperty("--c", curr);
            });
        });
    };

    // This code runs only after the component is mounted to the DOM
    onMount(() => {
        document.querySelectorAll(".book").forEach(flipBook);
    });
</script>

{#each members as member}
    <a href="/{member.id}">{member.name}</a>
{/each}

<div class="book">
    <div class="page">
        <div class="front cover">
            <h1>FlipBook FDND</h1>
            <p>2025.<br />First edition</p>
        </div>
        <div class="back">
            <h2>Sebastiaan</h2>
            <img
                src="https://avatars.githubusercontent.com/u/180168321?v=4"
                alt="Img 1"
            />
            <p>Bing Bong <code>perspective</code> Bong Bing</p>
        </div>
    </div>

    <div class="page">
        <div class="front">
            <p>
                Even more, the book height is dicated by the amount of content
                in the tallest page. The only thing you need to take care of is
                how much text you put into a page.
            </p>
        </div>
        <div class="back"></div>
    </div>

    <div class="page">
        <div class="front">
            <h2>JS at its minimum</h2>
            <p>
                JavaScript is at its minimum. Basically it's only used to set
                the initial page index and assign click listeners to the pages.
                Modifies the CSS <b>Var</b>
                for the <i>current</i> page, and the rest is handled entirely by
                CSS.
            </p>
        </div>
        <div class="back">
            <p>
                Additionally JavaScript allows you to click on an anchor link in
                your text — without turning the page. You can also have multiple
                independent flip books in a single document. You're all covered.
            </p>
        </div>
    </div>

    <div class="page">
        <div class="front">
            <h2>Crafting CSS magic</h2>
            <p>
                The opened (<i>viewing</i>) pages of the flip book are always
                kept at the same elevation. This is necessary if your book has
                no inclination (is top-down-view). Have you noticed that you can
                also click on the pages edge? CSS will nicely animate the group
                of pages to skip with a staggered animation.
            </p>
        </div>
        <div class="back">
            <p>
                Like in this demo, you can change the perspective of the parent
                container and change the X axis rotation of the book for extra
                effect.
            </p>
        </div>
    </div>

    <div class="page">
        <div class="front">
            <p>
                The necessary FlipBook's CSS is barely 30 lines, there is no
                swipe, natural page flip angling, complex shadows, etc. in order
                to keep it as simple as possible.
            </p>
        </div>
        <div class="back">
            <p>
                Feel free to use and abuse this code. Drop me a line if you find
                it cool or useful, or just want to say <i>hi</i>.
            </p>
        </div>
    </div>

    <div class="page">
        <div class="front">
            <img src="https://picsum.photos/id/1073/600/600" alt="Img 2" />
        </div>
        <div class="back cover">
            <h3>That's all, folks</h3>
            <p>
                FlipBook code and content:<br /><a
                    href="https://stackoverflow.com/users/383904/roko-c-buljan"
                    target="_blank"
                    rel="nofollow">Roko C. Buljan</a
                >
                <br />Original idea:<br /><a
                    href="https://stackoverflow.com/a/76978444/383904"
                    target="_blank"
                    rel="nofollow">Stack Overflow answer</a
                >
                <br />Images by: picsum.photos
            </p>
        </div>
    </div>
</div>

<style>
    * {
        box-sizing: border-box;
    }

    /* FlipBook */

    body {
        /* or any other parent wrapper */
        margin: 0;
        display: flex;
        min-height: 100dvh;
        perspective: 1600px;
        font:
            1em/1.4 "Poppins",
            sans-serif;
        overflow: hidden;
        color: hsl(180 68% 5%);
        /*   background-image: radial-gradient(circle farthest-corner at 50% 50%, hsl(187 20% 88%) 30%, hsl(149 20% 94%) 100%); */
    }

    .book {
        position: relative;
        display: flex;
        margin: auto;
        width: 40cqmin;
        /*1* let pointer event go trough pages of lower Z than .book */
        pointer-events: none;
        transform-style: preserve-3d;
        transition: translate 1s;
        translate: calc(min(var(--c), 1) * 50%) 0%;
        /* Incline on the X axis for pages preview */
        rotate: 1 0 0 30deg;
    }

    .page {
        /* PS: Don't go below thickness 0.5 or the pages might transpare */
        --thickness: 4;
        flex: none;
        display: flex;
        width: 100%;
        font-size: 2cqmin;
        /*1* allow pointer events on pages */
        pointer-events: all;
        user-select: none;
        transform-style: preserve-3d;
        transform-origin: left center;
        transition:
            transform 1s,
            rotate 1s ease-in
                calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
        translate: calc(var(--i) * -100%) 0px 0px;
        transform: translateZ(
            calc(
                (var(--c) - var(--i) - 0.5) * calc(var(--thickness) * 0.23cqmin)
            )
        );
        rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
    }

    .front,
    .back {
        position: relative;
        flex: none;
        width: 100%;
        backface-visibility: hidden;
        overflow: hidden;
        background-color: #fff;
        /* Fix backface visibility Firefox: */
        translate: 0px;
    }

    .back {
        translate: -100% 0;
        rotate: 0 1 0 180deg;
    }

    /* That's it. Your FlipBook customization styles: */

    .book {
        counter-reset: page -1;
        & a {
            color: inherit;
        }
    }

    .page {
        box-shadow: 0em 0.5em 1em -0.2em #00000020;
    }

    .front,
    .back {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        padding: 2em;
        border: 1px solid #0002;

        &:has(img) {
            /*     padding: 0; */
        }

        & img {
            width: 100%;
            height: 60%;
            object-fit: contain;
        }

        &::after {
            position: absolute;
            bottom: 1em;
            counter-increment: page;
            content: counter(page) ".";
            font-size: 0.8em;
        }
    }
    .cover {
        &::after {
            content: "";
        }
    }
    .front {
        &::after {
            right: 1em;
        }
        background: linear-gradient(to left, #f7f7f7 80%, #eee 100%);
        border-radius: 0.1em 0.5em 0.5em 0.1em;
    }
    .back {
        &::after {
            left: 1em;
        }
        background-image: linear-gradient(to right, #f7f7f7 80%, #eee 100%);
        border-radius: 0.5em 0.1em 0.1em 0.5em;
    }

    .cover {
        background:
            radial-gradient(
                circle farthest-corner at 80% 20%,
                hsl(150 80% 20% / 0.3) 0%,
                hsl(170 60% 10% / 0.1) 100%
            ),
            hsl(231, 32%, 29%)
                url("https://s3-alpha.figma.com/hub/file/6585374256/3846baca-e383-46f4-b15f-75c5416fcaf7-cover.png")
                50% / cover;
        color: hsl(200 30% 98%);
    }
</style>
