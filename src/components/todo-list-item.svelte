<script>
  import { createEventDispatcher } from "svelte";
  export let item;
  export let index;

  let dispatch = createEventDispatcher();
</script>

<style>
  .todo-list-item {
    width: 25%;
    padding: 1rem 2rem;
    border-radius: 2px;
    background-color: #ff3e00;
    color: white;
    margin: 0.5rem auto;
    position: relative;
  }

  @media (min-width: 375px) and (max-width: 576px) {
    .todo-list-item {
      width: 80%;
    }
  }

  .delete-button {
    position: absolute;
    top: calc(100% / 5);
    right: 10px;
    color: white;
    background-color: transparent;
    padding: 0.5rem;
    border: none;
  }

  .delete-button:hover {
    color: lightgrey;
  }
</style>

<div class="todo-list-item">
  <span>{item}</span>
  <button class="delete-button" on:click={() => dispatch('delete', { index })}>
    X
  </button>
</div>
