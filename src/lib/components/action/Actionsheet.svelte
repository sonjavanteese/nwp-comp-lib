<script>
   import { isActPanel } from '../store';
   import { clickOutside } from "./clickOutside";
   export let noclose = false;
   export let closetext = 'Close';
   const closeActPan = () => {
      if ($isActPanel) {
         isActPanel.set(false);
      }
   }
</script>


<aside class="action-group" class:isopen={$isActPanel} use:clickOutside on:clickOutside={closeActPan} {...$$restProps}>
   <section class="action-panel">
      <slot></slot>
      {#if !noclose}    
         <footer on:click={closeActPan} class="actclose">
            {closetext}
         </footer>
      {/if}      
   </section>
</aside>
<div class:isopen={$isActPanel} class="overlay" />

<style>
   /*    :root {
      --actsheet-panel-width: 560px;
      --actsheet-color: #484848;
      --actsheet-bg: #ffffff;
      --actsheet-item-height: 40px;
      --actsheet-close-bg: #333333;
      --actsheet-close-color: #ffffff;
      --actsheet-close-border-color:#111;
      --actsheet-body-mb: 0.5rem;
      --actsheet-head-mb: 0.5rem;
      --actsheet-item-mb: 0.15rem;
      --actsheet-header-size: 1.2rem;s
      --actsheet-header-color: #444;
      --actsheet-header-bg: #f6f6f6;
      --actsheet-border-color: #cccccc;
      --actsheet-border-radius: 6px;
      --actsheet-overlay-bg: rgba(0, 0, 0, 0.4);
   } */
   .action-group {
      display: flex;
      flex-direction: column-reverse;
      position: fixed;
      bottom: -100%;
      width: 100%;
      height: 100%;
      max-height: 100%;
      padding: 1rem;
      margin: 0;
      z-index: 1090;
      overflow: hidden;
      transition: bottom 0.6s;
   }

   .action-group.isopen {
      bottom: 0;
   }

   .action-panel {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-height: calc(100%-4rem);
      max-width: var(--actsheet-panel-width);
      margin: 0 auto 1rem;
      background-color: transparent;
      overflow: hidden;
     /*  overflow-x: hidden;
      overflow-y: auto; */
   }

   .actclose {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      font-size: 1.2rem;
      padding: 0.5rem;
      width: 100%;
      min-height: var(--actsheet-item-height);
      background-color: var(--actsheet-close-bg);
      color: var(--actsheet-close-color);
      border: 1px solid var(--actsheet-close-border-color);
      border-radius: var(--actsheet-border-radius);
      text-align: center;
      cursor: pointer;
   }
   .overlay {
      display: none;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 188;
   }
   .overlay.isopen {
      display: flex;
      background-color: var(--actsheet-overlay-bg);
   }
</style>