<script>
  import axios from "axios";
  import uuid from "uuid";
  import fromPairs from "lodash/fromPairs";
  import AppInput from "./components/app-input-text.svelte";
  import AppButton from "./components/app-button.svelte";
  import AppToast from "./components/app-toast.svelte";
  import TodoList from "./components/todo-list.svelte";
  import ThemeToggle from "./components/theme-toggle.svelte";

  let todoItems = [];
  let todoText = "";
  let error = "";
  let theme = "dark";

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
      const { data } = await axios.get(`http://localhost:3000/todos/${guid}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      return data;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async function storeTodoItem(item) {
    try {
      const guid = getGuidFromCookies();
      await axios.post(
        `http://localhost:3000/todos/${guid}`,
        {
          todoItem: item
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch (err) {
      error = err;
    }
  }

  async function addItemToList(item) {
    if (!item) {
      error = "Please enter a task before adding...";
      return;
    }
    await storeTodoItem(item);
    todoItems = [...todoItems, item];
    todoText = "";
  }

  function clearError() {
    console.log(error);
    error = "";
  }

  async function deleteItemFromList(event) {
    let itemToDelete;
    const guid = getGuidFromCookies();
    todoItems = todoItems.filter((item, index) => {
      if (index === event.detail.index) itemToDelete = item;
      return index !== event.detail.index;
    });
    if (!itemToDelete) return;
    await axios.delete(
      `http://localhost:3000/todos/${guid}/${itemToDelete.id}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  function updateTheme() {
    console.log(theme);
    if (theme === light) theme = "dark";
    else theme = "light";
  }

  getTodoItems().then(items => {
    if (!items) return;
    items.forEach(item => (todoItems = todoItems.concat(item)));
  });
</script>

<style>
  .app-light {
    text-align: center;
    padding: 1em;
    height: 100vh;
    margin: 0 auto;
    background-color: white;
  }

  .app-dark {
    text-align: center;
    padding: 1em;
    height: 100vh;
    margin: 0 auto;
    background-color: black;
  }

  .search-container {
    transform: translateY(calc(100vh / 2));
    transition: transform 0.5s;
  }

  .top {
    transform: translateY(0);
  }
</style>

<main class={theme === 'light' ? 'app-light' : 'app-dark'}>
  <ThemeToggle {theme} on:click{updateTheme} />
  {#if error.length}
    <AppToast {error} on:clear={clearError} />
  {/if}
  <div
    class={todoItems.length > 0 ? 'search-container top' : 'search-container'}>
    <AppInput placeholder="Enter new item" bind:value={todoText} />
    <AppButton on:click={addItemToList(todoText)}>Add</AppButton>
  </div>
  <TodoList {todoItems} on:delete={deleteItemFromList} />
</main>
