<script>
  import AppInput from "./components/app-input-text.svelte";
  import AppButton from "./components/app-button.svelte";
  import AppToast from "./components/app-toast.svelte";
  import TodoList from "./components/todo-list.svelte";

  let todoItems = [];
  let todoText = "";
  let error = "";

  function addItemToList() {
    if (!todoText) {
      error = "Please enter a task before adding...";
      return;
    }
    todoItems = [...todoItems, todoText];
    todoText = "";
  }

  function clearError() {
    console.log(error);
    error = "";
  }

  function deleteItemFromList() {
    todoItems = todoItems.filter((item, index) => index === event.detail);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    height: 100vh;
    margin: 0 auto;
    background-color: white;
  }

  .search-container {
    transform: translateY(calc(100vh / 2));
    transition: transform 0.5s;
  }

  .top {
    transform: translateY(0);
  }
</style>

<main>
  {#if error.length}
    <AppToast {error} on:clear={clearError} />
  {/if}
  <div
    class={todoItems.length > 0 ? 'search-container top' : 'search-container'}>
    <AppInput placeholder="Enter new item" bind:value={todoText} />
    <AppButton on:click={addItemToList}>Add</AppButton>
  </div>
  <TodoList {todoItems} on:delete={deleteItemFromList} />
</main>
