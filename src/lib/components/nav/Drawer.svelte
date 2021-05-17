<script>
  import { Icon } from '../icons/';
  import { isSbOpen } from '../store';
  import { clickOutside } from "./clickOutside";
  export let label = "Navi";
  export let dark = false;
  function handleClickOutside() {
    if ($isSbOpen) {
      isSbOpen.set(false);
    }
  }
</script>

<aside class:isOpen={$isSbOpen} use:clickOutside on:clickOutside={handleClickOutside}>
  <header class:dark={dark}>
    <div class="label">{label}</div>
    <button class="closeitem" on:click={() => isSbOpen.set(false)}>
      <Icon name="close" />
    </button>
  </header>
  <slot />
</aside>
<div class:isOpen={$isSbOpen} class="overlay" />

<style>
  /* :root {
    --sidebar-header-color: #fff;
    --sidebar-header-bg: rgba(37, 99, 235, 1);
    --sidebar-header-border: 1px solid rgba(29, 78, 216, 1);
    --sidebar-button-active: rgba(204, 204, 204, 0.4);
    --sidebar-color: #383838;
    --sidebar-bg: #fff;
    --sidebar-width: 340px;
    --sidebar-offcont: -340px;
    --sidebar-item-height: 50px;
    --sidebar-overlay-bg: rgba(0, 0, 0, 0.4);
  } */
  aside {
    z-index: 200;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    width: var(--sidebar-width);
    height: 100%;
    background-color: var(--sidebar-bg);
    color: var(--sidebar-color);
    left: var(--sidebar-offcont);
    transition: left 0.3s ease-in-out;
  }
  aside.isOpen {
    left: 0;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--sidebar-header-bg);
    color: var(--sidebar-header-color);
  }
  header.dark {
    background-color: var(--sidebar-header-bg-dark);
  }
  .label {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: var(--sidebar-header-color);
  }
  button {
    background-color: transparent;
    border-color: transparent;
    outline: none;
    border-radius: 0;
    cursor: pointer;
    color: var(--sidebar-header-color);
  }
  button:active {
    background-color: var(--sidebar-button-active);
  }
  .closeitem {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: var(--sidebar-item-height);
    min-width: var(--sidebar-item-height);
    color: var(--sidebar-header-color);
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
  .overlay.isOpen {
    display: block;
    background-color: var(--sidebar-overlay-bg);
  }
</style>
