<script>
  import axios from "axios";
  import uuid from "uuid";
  import AppInput from "./components/app-input-text.svelte";
  import AppButton from "./components/app-button.svelte";
  import AppToast from "./components/app-toast.svelte";
  import TodoList from "./components/todo-list.svelte";
  import ThemeToggle from "./components/theme-toggle.svelte";
  import { onMount } from "svelte";
  import { theme, updateTheme, updateError } from "./state/interface.js";
  import {
    todoItems,
    todoText,
    getTodoItems,
    addItemToList,
    deleteItemFromList,
    initializeTodoItems
  } from "./state/todos.js";

  if (!document.cookie.includes("guid")) {
    document.cookie = `guid=${uuid()}`;
  }

  onMount(async () => {
    const items = await getTodoItems();
    initializeTodoItems(items);
  });
</script>

<style lang="scss">
  .app-light {
    text-align: center;
    padding: 1em;
    height: 100vh;
    margin: 0 auto;
    background-color: #ffffff;
    transition: background-color 1s linear;
  }

  .app-dark {
    text-align: center;
    padding: 1em;
    height: 100vh;
    margin: 0 auto;
    background-color: #212121;
    transition: background-color 1s linear;
  }

  .search-container {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    transform: translateY(calc(100vh / 2));
    transition: transform 0.5s;
  }

  .top {
    transform: translateY(0);
  }
</style>

<main class={$theme === 'light' ? 'app-light' : 'app-dark'}>
  <ThemeToggle />
  <AppToast />
  <div
    class={$todoItems.length > 0 ? 'search-container top' : 'search-container'}>
    <AppInput label="Search:" bind:value={$todoText} />
    <AppButton on:click={addItemToList}>Add Task</AppButton>
  </div>
  <TodoList on:delete={deleteItemFromList} />
</main>
