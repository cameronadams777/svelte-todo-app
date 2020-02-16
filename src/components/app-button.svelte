<script>
  export let color = "primary";
</script>

<style lang="scss">
  .app-button {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    color: white;
    border: none;
    letter-spacing: 0.0892857143em;
    text-transform: uppercase;

    &:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }

  .primary {
    background-color: #3700be;

    &:hover {
      background-color: #6200ee;
    }
  }
</style>

<button class={`app-button ${color}`} on:click>
  <slot />
</button>
