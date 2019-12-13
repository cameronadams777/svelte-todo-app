<style>
  button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 5px;
    background-color: #40b3ff;
    color: white;
    border: none;
  }

  button:hover {
    background-color: #1c83c7;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>

<button on:click>
  <slot />
</button>
