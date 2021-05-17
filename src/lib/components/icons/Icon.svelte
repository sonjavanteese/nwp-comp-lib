<script>
    export let name = "html5";
</script>

<style>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  align-self: center;
}
.icon-large {
  width: 1.5em;
  height: 1.5em;
}
</style>

<svg class="icon icon-{name}" {...$$restProps}>
    <use xlink:href="#icon-{name}"></use>
</svg>

