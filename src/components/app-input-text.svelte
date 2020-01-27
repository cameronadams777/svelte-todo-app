<script>
  import { theme } from "../state/interface.js";
  export let placeholder;
  export let label = "";
  export let value = "";

  let focused = false;
</script>

<style lang="scss">
  .app-input-container {
    position: relative;
    margin: 0 0.5rem;
  }

  .app-input-label {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 1.5rem;
    color: darkgrey;
    transition: all 0.25s linear;
    pointer-events: none;
  }

  .focused-light {
    top: 5px;
    left: 7px;
    font-size: 0.25rem;
    color: #6200ee;
  }

  .focused-dark {
    top: 5px;
    left: 7px;
    font-size: 0.25rem;
    color: darkgray;
  }

  .app-input-dark {
    border-radius: 5px;
    outline: none;
    padding: 1rem 1rem;
    background-color: transparent;
    color: white;
  }

  .app-input-light {
    border-radius: 5px;
    outline: none;
    padding: 1rem 1rem;
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
  <label
    class={focused || value.length ? ($theme === 'light' ? 'app-input-label focused-light' : 'app-input-label focused-dark') : 'app-input-label'}>
    {label}
  </label>
</div>
