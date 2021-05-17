<script>
   import { Icon } from "../icons/";
   export let href = "#/";
   export let icon = null;
   export let titel = null;
   export let lg = false;
   export let xl = false;
</script>

<a {href} on:click class="navbar" class:lg class:xl {...$$restProps}>
   {#if icon}
      <span class="icon"><Icon name={icon} /></span>
   {/if}
   <div class="titel">
      {#if titel}
         {#if icon}
            <div class="icon-titel">{titel}</div>
         {:else}
            {titel}
         {/if}
      {:else}
         <slot />
      {/if}
   </div>
</a>

<style>
   :root {
      --navbar-bar-active: rgba(204, 204, 204, 0.4);
      --navbar-bar-bg: transparent;
      --navbar-bar-color: #f6f6f6;
      --navbar-bar-fontsize: 1rem;
      --navbar-bar-fontsize-lg: 1.25rem;
      --navbar-bar-fontsize-xl: 1.5rem;
      --navbar-body-height: 50px;
      --navbar-bar-fontsize-weight: 600;
      --navbar-bar-height: 50px;
      --navbar-bar-width: 30px;
   }
   a {
      color: var(--navbar-bar-color);
      text-decoration: none;
      outline: none;
      min-height: var(--navbar-bar-height);
      min-width: var(--navbar-bar-width);
   }
   a:focus {
      box-shadow: 0 0 0 0;
   }
   .navbar {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      font-size: var(--navbar-bar-fontsize);
      font-weight: var(--navbar-bar-fontsize-weight);
      background-color: var(--navbar-bar-bg);
      color: var(--navbar-bar-color);
      border-color: transparent;
      padding: 0 0.5rem;
   }
   .navbar.lg {
      font-size: var(--navbar-bar-fontsize-lg);
   }
   .navbar.xl {
      font-size: var(--navbar-bar-fontsize-xl);
   }
   .navbar > * {
      flex: 0 1 auto;
      align-self: center;
   }
   .navbar:active,
   .navbar.active {
      background-color: var(--navbar-bar-active);
   }
   .navbar > .titel {
      padding: 0;
   }
   .navbar > .icon {
      padding: 0;
   }
   .icon-titel {
      padding: 0 0 0 0.5rem !important;
   }
</style>
