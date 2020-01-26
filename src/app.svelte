<script>
  import axios from "axios";
  import uuid from "uuid";
  import fromPairs from "lodash/fromPairs";
  import AppInput from "./components/app-input-text.svelte";
  import AppButton from "./components/app-button.svelte";
  import AppToast from "./components/app-toast.svelte";
  import TodoList from "./components/todo-list.svelte";
  import ThemeToggle from "./components/theme-toggle.svelte";
  import { getTodos, createNewTodoItem, deleteTodoItem } from "./api/todos.js";
  import { theme, updateTheme, updateError } from "./state/interface.js";

  let todoItems = [];
  let todoText = "";

  if (!document.cookie.includes("guid")) {
    document.cookie = `guid=${uuid()}`;
  }

  function getGuidFromCookies() {
    const cookies = fromPairs([document.cookie.split("=")]);
    return cookies.guid;
  }

  async function getTodoItems() {
    try {
      const guid = getGuidFromCookies();
      const { data } = await getTodos({ guid });
      return data;
    } catch (error) {
      console.error(error);
      updateError(error);
      return;
    }
  }

  async function storeTodoItem(item) {
    try {
      const guid = getGuidFromCookies();
      const payload = {
        todoItem: item
      };
      await createNewTodoItem({ guid, payload });
    } catch (error) {
      updateError(error);
    }
  }

  async function addItemToList(item) {
    if (!item) {
      updateError("Please enter a task before adding...");
      return;
    }
    await storeTodoItem(item);
    todoItems = [...todoItems, { value: item }];
    todoText = "";
  }

  async function deleteItemFromList(event) {
    let itemToDelete;
    const guid = getGuidFromCookies();
    todoItems = todoItems.filter((item, index) => {
      if (index === event.detail.index) itemToDelete = item;
      return index !== event.detail.index;
    });
    if (!itemToDelete) return;
    await deleteTodoItem({ guid, itemId: itemToDelete.id });
  }

  getTodoItems().then(items => {
    if (!items) return;
    items.forEach(item => (todoItems = todoItems.concat(item)));
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
    class={todoItems.length > 0 ? 'search-container top' : 'search-container'}>
    <AppInput label="Search:" bind:value={todoText} />
    <AppButton on:click={addItemToList(todoText)}>Add Task</AppButton>
  </div>
  <TodoList {todoItems} on:delete={deleteItemFromList} />
</main>
