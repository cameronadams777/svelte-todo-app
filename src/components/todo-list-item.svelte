<script>
  import { createEventDispatcher } from "svelte";
  import { theme } from "../state/interface.js";
  export let item;
  export let index;

  let dispatch = createEventDispatcher();
</script>

<style lang="scss">
  .todo-list-item {
    width: 25%;
    padding: 1rem 2rem;
    border-radius: 5px;
    color: white;
    margin: 0.5rem auto;
    position: relative;
  }

  .light {
    background-color: #e63946;
  }

  .dark {
    background-color: #fb4b4e;
  }

  @media (min-width: 375px) and (max-width: 576px) {
    .todo-list-item {
      width: 80%;
    }
  }

  .delete-button {
    position: absolute;
    top: 50%;
    right: 10px;
    color: white;
    background-color: transparent;
    padding: 0.5rem;
    border: none;
    transform: translateY(-50%);

    &:hover {
      color: lightgrey;
    }
  }
</style>

<div
  class={$theme === 'light' ? 'todo-list-item light' : 'todo-list-item dark'}>
  <span>{item.value}</span>
  <button class="delete-button" on:click={() => dispatch('delete', { index })}>
    X
  </button>
</div>
