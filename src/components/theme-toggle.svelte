<script>
  import { theme, updateTheme } from "../state/interface.js";
  import { SunIcon, MoonIcon } from "svelte-feather-icons";
</script>

<style lang="scss">
  .theme-toggle {
    position: absolute;
    top: 25px;
    right: 25px;
  }

  .toggle-light {
    color: black;

    &:hover {
      cursor: pointer;
      color: darkgrey;
    }
  }

  .toggle-dark {
    color: white;

    &:hover {
      cursor: pointer;
      color: lightgrey;
    }
  }
</style>

<div
  class={$theme === 'light' ? 'theme-toggle toggle-light' : 'theme-toggle toggle-dark'}
  on:click={updateTheme}>
  {#if $theme === 'light'}
    <SunIcon size="24" />
  {:else}
    <MoonIcon size="24" />
  {/if}
</div>
