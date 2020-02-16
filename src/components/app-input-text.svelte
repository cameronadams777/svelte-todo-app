<script>
  import { theme } from "../state/interface.js";
  export let placeholder;
  export let value = "";

  let focused = false;
</script>

<style lang="scss">
  .app-input-light {
    padding: 0.75rem 1.5rem;
    margin: 0.5rem;
    border-radius: 10px;
    border: lightgray solid 0.5px;
  }
</style>

<div class="app-input-container">
  <input
    class={$theme === 'light' ? 'app-input-light' : 'app-input-dark'}
    type="text"
    {placeholder}
    bind:value
    on:focus={() => (focused = true)}
    on:blur={() => (focused = false)} />
</div>
