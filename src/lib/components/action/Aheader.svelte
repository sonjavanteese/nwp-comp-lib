<script>
   import { Icon } from "../icons/";
   import { clickOutside } from "./clickOutside";
   export let titel = null;
   export let icon = null;
   export let dark = false;
</script>

<header class="action-header" class:dark={dark} {...$$restProps}>
   {#if icon}
       <Icon name={icon} style='margin-right: 0.5rem;' />
   {/if}
   {#if titel}
       <span class="titel">{titel}</span>
   {:else}
   <span class="titel"><slot>Info</slot></span>
   {/if}
</header>

<style>
  /*  :root {
    --actsheet-header-color: #444;
    --actsheet-header-bg: #f6f6f6;
    --actsheet-header-size: 1.1rem;
    --actsheet-border-color: #cccccc;
    --actsheet-border-radius: 6px;
  }  */
  .action-header {
   display: flex;
   align-content: center;
   padding: 0 1rem;
   margin-bottom: var(--actsheet-head-mb);
   font-size: var(--actsheet-header-size);
   background-color: var(--actsheet-header-bg);
   color: var(--actsheet-header-color);
   border: 1px solid var(--actsheet-border-color);
   border-radius: var(--actsheet-border-radius);
   overflow: hidden;
  }
  .action-header.dark {
   background-color: var(--actsheet-header-bg-dark);
   color: var(--actsheet-header-color-dark);
   border: 1px solid var(--actsheet-border-color-dark);
  }
  .action-header > * {
      flex: 0 1 auto;
      align-self: center;
      padding-left: 0.5rem;
   }
   .action-header > .titel {
      flex: 1 1 auto;
      padding: 0.25rem 0.5rem;
      text-align: center;
   }
</style>