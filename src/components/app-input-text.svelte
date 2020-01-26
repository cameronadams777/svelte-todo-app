<script>
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

  .focused {
    top: 5px;
    left: 7px;
    font-size: 0.25rem;
    color: #6200ee;
  }

  .app-input {
    border-radius: 5px;
    outline: none;
    padding: 1rem 1rem;
  }
</style>

<div class="app-input-container">
  <input
    class="app-input"
    type="text"
    {placeholder}
    bind:value
    on:focus={() => (focused = true)}
    on:blur={() => (focused = false)} />
  <label
    class={focused || value.length ? 'app-input-label focused' : 'app-input-label'}>
    {label}
  </label>
</div>
