<script>
   import { createEventDispatcher } from 'svelte';
   import { current_component } from 'svelte/internal';


   export let name = '';
   export let color;
   export let outlined = false;
   export let rounded = false;
   export let disabled = false;
   export let link = false;
   export let icon = false;
   export let style;
   export let className = '';

   const dispatch = createEventDispatcher();
   function onclick(e) {
       dispatch('change');
   }
</script>

<style>
</style>

<button
   role="button"
   class={`${className} faic btn if tea`}
   class:btnr={rounded}
   class:pc={color === 'primary'}
   class:sc={color === 'secondary'}
   class:disabled
   class:link
   class:icon
   class:fjcc={icon}
   {style}
   class:btno={outlined}
   {disabled}
>
   <slot name="icon" />
   {#if name}{name}{/if}
</button>
