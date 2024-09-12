<script>

</script>
<!-- <div class="lol">
	<p>12345678</p>
</div> -->
<section class="masonry masonry--h">
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #1"></figure>
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #2"></figure>
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #3"></figure>
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #4"></figure>
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #5"></figure>
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #6"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #7"></figure>
	<figure class="masonry-brick masonry-brick--h"><img class="masonry-img" alt="Masonry Brick #8"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #9"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #10"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #11"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #12"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #13"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #14"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #15"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #16"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #17"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #18"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #19"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #20"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #21"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #22"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #23"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #24"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #25"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #26"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #27"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #28"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #29"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #30"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #31"></figure>
	<figure class="masonry-brick masonry-brick--h"><img  class="masonry-img" alt="Masonry Brick #32"></figure>
</section>

<style>
*,
*::before,
*::after,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  appearance: none;
  text-decoration: none;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}

.masonry {
    display: flex;
    width: 100%;
}

.masonry--h {
    flex-flow: row wrap;
	margin-left: -8px;
    counter-reset: brick;
}

.masonry-brick {
                overflow: hidden;
                border-radius: 5px;
                margin: 0 0 8px 8px;
                /* Some Gutter */
                background-color: #333;
                color: white;
                position: relative;
            }

            .masonry-brick:after {
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 5000;
                transform: translate(-50%, -50%);
                counter-increment: brick;
                content: counter(brick);
                transition: font-size .25s, opacity .25s ease-in-out;
                font-weight: 700;
                opacity: .5;
                font-size: 1.25em;
            }

            .masonry-brick:hover:after {
                font-size: 2.25em;
                opacity: 1;
            }

            .masonry-brick--h {
                flex: auto;
                height: 250px;
                min-width: 150px;
            }

            @media only screen and (min-width: 1024px) {
                /* Horizontal masonry bricks on desktop-sized screen */ .masonry-brick--h:nth-child(4n+1) {
                    width: 250px;
                }

                .masonry-brick--h:nth-child(4n+2) {
                    width: 325px;
                }

                .masonry-brick--h:nth-child(4n+3) {
                    width: 180px;
                }

                .masonry-brick--h:nth-child(4n+4) {
                    width: 380px;
                }
            }

@media only screen and (max-width: 1023px) and (min-width: 768px) {
 .masonry-brick--h:nth-child(4n+1) {
                    width: 200px;
                }

                .masonry-brick--h:nth-child(4n+2) {
                    width: 250px;
                }

                .masonry-brick--h:nth-child(4n+3) {
                    width: 120px;
                }

                .masonry-brick--h:nth-child(4n+4) {
                    width: 280px;
                }                
            }

            .masonry-img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                filter: brightness(50%);
            }


</style>