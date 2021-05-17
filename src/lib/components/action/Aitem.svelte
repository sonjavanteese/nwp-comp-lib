<script>
   import { isActPanel } from '../store';
   import { Icon } from "../icons/";
   export let titel = null;
   export let icon = null;
   export let href = 'javascript:void(0)';
   const closeActPan = () => {
      if ($isActPanel) {
         isActPanel.set(false);
      }
   }
</script>


<a href={href} on:click={closeActPan} class="actitem" {...$$restProps}>
   {#if icon}
      <Icon name={icon} style="margin-right: 0.75rem" />
   {:else}
   <span>
      {#if titel}
         {titel}
      {:else}
         <slot />
      {/if}
   </span>
   {/if}
</a>

<style>
   /* :root {
      --actsheet-color: #484848;
      --actsheet-bg: #ffffff;
      --actsheet-item-height: 40px;
      --actsheet-item-mb: 0.25rem;
   } */

   .actitem {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
      min-height: var(--actsheet-item-height);
      background-color: var(--actsheet-bg);
      color: var(--actsheet-color);
      text-align: center;
      margin-bottom: var(--actsheet-item-mb);
   }

   .actitem>span {
      flex: 0 1 auto;
      align-self: center;
   }
</style>





