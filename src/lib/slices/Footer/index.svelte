<script>
  /** @type {import("@prismicio/client").Content.FooterSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <!-- Placeholder component for {slice.slice_type} (variation: {slice.variation})
  Slices -->
</section>


  <footer>
      <div class="footer-content">
          <div class="footer-logo">
              <img src="logo.png" alt="Logo">
          </div>
          <div class="footer-copyright">
              &copy; 2023 Your Company Name
          </div>
      </div>
  </footer>

<style>

/* Apply a background color and spacing to the footer */
.wrapper {
    min-height: 100vh; /* Ensure the content fills the entire viewport */
    display: flex;
    flex-direction: column;
}

footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
}

/* Center the logo and copyright text on larger screens */
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Align content to the top */
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Style the logo */
.footer-logo img {
    max-width: 200px; /* Adjust the logo size */
    height: auto;
}

/* Style the copyright text */
.footer-copyright {
    font-size: 14px;
}

/* Make the footer responsive for smaller screens */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center; /* Center content on small screens */
        text-align: center;
    }

    .footer-logo img {
        margin-bottom: 20px; /* Add space below the logo on small screens */
    }
}


</style>