<script>
   import { Icon } from '../icons/';
   export let href = "#/";
   export let icon = null;
   export let titel = null;
   export let lg = false;
   export let xl = false;
</script>

<a href={href} on:click class="flexbar" class:lg={lg} class:xl={xl} {...$$restProps}>
   {#if icon}
   <span class="baritem"><Icon name={icon} /></span>
   {:else}
      {#if $$slots.before}
      <span class="baritem">
         <slot name="before"></slot>
      </span>
      {/if}
   {/if}
      <div class="titel">
         {#if titel}
             {titel}
         {:else}
             <slot />
         {/if}
      </div>
   {#if $$slots.after}
      <span class="baritem"><slot name="after"></slot></span>
   {/if}
</a>

<style>
   /* :root {
      --list-item-color: #383838;
      --list-item-bg: transparent;
      --list-item-border-color: #eeeeee;
      --list-item-active: rgba(204, 204, 204, 0.4);
   } */
   a {
      color: var(--list-item-color);
      text-decoration: none;
      outline: none;
   }
   a:focus {
    box-shadow: 0 0 0 0;
   }
   .flexbar {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      font-size: var(--list-item-font-size);
      background-color: var(--list-item-bg);
      color: var(--list-item-color);
      border-color: transparent;
      border-bottom: 1px solid var(--list-item-border-color);
   }
   .flexbar.lg {
      font-size: var(--list-item-font-size-lg);
   }
   .flexbar.xl {
      font-size: var(--list-item-font-size-xl);
   }
   .flexbar > * {
      flex: 0 1 auto;
      align-self: center;
      padding-left: 0.5rem;
   }
   .flexbar:active, .flexbar.active {
      background-color: var(--list-item-active);
   }
   .flexbar > .titel {
      flex: 1 1 auto;
      padding: 0.25rem 0.5rem;
   }
   .baritem {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
   }
</style>