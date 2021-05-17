<script>
   import { Icon } from "../icons/";
   export let bg = false;
   export let dark = false;
   export let center = false;
   export let pData = null;
   export let lg = false;
   export let xl = false;
   let bgi = "";
   if (bg) {
      if (pData.image) {
         bgi = pData.image;
      }
   }
   let bgstyle = `background-image: url("${bgi}")`;
</script>

<header class="hero" class:dark={dark} class:lg class:xl style={bgstyle}>
   <div class="body" class:center={center}>
      {#if pData}
         {#if pData.header}
            <div><span class="header">{pData.header}</span></div>
            <div><span class="info">{pData.info}</span></div>
         {:else}
            <slot />
         {/if}
      {/if}
   </div>
</header>

<style>
   :root {
   --app-color: #484848;
   --app-bg: #ffffff;
   --app-header-height: 50px;
   --header-bg-default: rgba(37, 99, 235, 1);
   --header-bg-dark: rgba(56, 56, 56, 1);

   --hero-color: var(--app-color);
   --hero-bg: #e8e8e8;
   --hero-color-dark: var(--app-bg);
   --hero-bg-dark: #333;
   --hero-font-size-header: 3rem;
   --hero-font-size: 1.2rem;
   }
   .hero {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 4rem;
      padding-top: 4rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: var(--hero-bg);
      color: var(--hero-color);
   }
   .hero.dark {
      background-color: var(--hero-bg-dark);
      color: var(--hero-color-dark);
   }

   .hero.lg {
      padding-bottom: 8rem;
      padding-top: 8rem;
   }

   .hero.xl {
      padding-bottom: 10rem;
      padding-top: 10rem;
   }

   .body {
      padding: 0.4rem;
   }
   .body.center {
      text-align: center;
   }
   
   .header {
      font-size: var(--hero-font-size-header);
      font-weight: 700;
      margin-bottom: 1rem;
   }
   .info {
      font-size: var(--hero-font-size);
      font-weight: 700;
   }
   .dark .header, .dark .info {
      background-color: rgba(68, 68, 68, 0.5);
      border-radius: 4px;
   }
</style>
