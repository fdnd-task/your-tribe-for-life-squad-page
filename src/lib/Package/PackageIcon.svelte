<script>
  export let colors = {
    "top-left": "#f5dd71",
    "top-right": "#ecbd00",
    left: "#ad0000",
    right: "#92008b",
    front: "#009207",
    back: "#00b9b0",
  };
</script>

<div class="wrapper">
  <!-- <div class="top-left"></div> -->
  <!-- <div class="top-right"></div> -->
  <div class="left" style="background-color: {colors.left};"></div>
  <div class="right" style="background-color: {colors.right};"></div>
  <div class="front" style="background-color: {colors.front};"></div>
  <div class="back" style="background-color: {colors.back};"></div>
</div>

<style>
  .wrapper {
    position: relative;
    perspective: 2000px;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    /* background-color: red; */

    --package-size: 8rem;
    --rotation-x: -10deg;
    --rotation-y: -15deg;
  }

  /* .wrapper > div {
    border: 1px solid rgb(159, 142, 108);
  } */

  .left,
  .right,
  .front,
  .back {
    position: absolute;
    left: calc(50% - 0.5 * var(--package-size));
    top: calc(50% - 0.5 * var(--package-size));
    width: var(--package-size);
    height: var(--package-size);
  }

  .top-left {
    position: absolute;
    width: calc(0.5 * var(--package-size));
    height: var(--package-size);
    background-color: #d20f0f;
    transform: rotateX(-10deg) rotateY(-15deg)
      translateZ(calc(0.5 * var(--package-size)));
  }

  .top-right {
    position: absolute;
    width: calc(0.5 * var(--package-size));
    height: var(--package-size);
    background-color: #18ec00;
    transform: rotateY(345deg) rotateX(260deg)
      translateZ(calc(0.5 * var(--package-size)));
  }

  .left {
    transform: rotateX(var(--rotation-x))
      rotateY(calc(var(--rotation-y) - 90deg))
      translateZ(calc(0.5 * var(--package-size)));
  }
  .right {
    transform: rotateX(var(--rotation-x))
      rotateY(calc(var(--rotation-y) - 270deg))
      translateZ(calc(0.5 * var(--package-size)));
  }
  .front {
    transform: rotateX(var(--rotation-x)) rotateY(var(--rotation-y))
      translateZ(calc(0.5 * var(--package-size)));
  }
  .back {
    transform: rotateX(var(--rotation-x))
      rotateY(calc(var(--rotation-y) - 180deg))
      translateZ(calc(0.5 * var(--package-size)));
  }
</style>
