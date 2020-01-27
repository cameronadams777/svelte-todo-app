<script>
  import TodoListItem from "./todo-list-item.svelte";
  import { todoItems } from "../state/todos.js";
</script>

<style>
  .todo-list {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 2s;
  }

  .visible {
    opacity: 1;
  }
</style>

<div class={$todoItems.length > 0 ? 'todo-list visible' : 'todo-list'}>
  {#each $todoItems as item, index}
    <TodoListItem {item} {index} on:delete />
  {/each}
</div>
