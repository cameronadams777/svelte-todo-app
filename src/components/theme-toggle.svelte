<script>
  import { createEventDispatcher } from "svelte";
  import { SunIcon, MoonIcon } from "svelte-feather-icons";

  export let theme;
  let dispatch = createEventDispatcher();
</script>

<style lang="scss">
  .theme-toggle {
    position: absolute;
    top: 25px;
    right: 25px;

    &:hover {
      cursor: pointer;
    }
  }

  .dark {
    color: white;

    &:hover {
      cursor: pointer;
      color: lightgrey;
    }
  }
</style>

<a
  class={theme === 'light' ? 'theme-toggle' : 'theme-toggle dark'}
  on:click={() => dispatch('click')}>
  {#if theme === 'light'}
    <MoonIcon size="24" />
  {:else}
    <SunIcon size="24" />
  {/if}
</a>
