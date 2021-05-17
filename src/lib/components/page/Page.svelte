<script>
   import { createEventDispatcher } from "svelte";
   import { current_component } from "svelte/internal";

   export let name = "";
   export let outlined = false;
   export let rounded = false;
   export let disabled = false;
   export let link = false;
   export let icon = false;

   const dispatch = createEventDispatcher();

   function onclick(e) {
      dispatch("change");
   }
</script>


<main>
   <slot />
</main>

<style>

   main {
      position: absolute;
      top: 50px;
      left: 0;
      bottom: 0;
      right: 0;
      overflow-x: hidden;
      overflow-y: auto;
   }
</style>
