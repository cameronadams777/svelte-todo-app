<script>
  import moment from "moment";
  import { PlusIcon } from "svelte-feather-icons";
  import { tasks } from "../state/todos.js";
  import { updateDisplayAddTaskModal } from "../state/interface.js";

  function time(timestamp) {
    return timestamp ? moment(timestamp).format("H:mm") : "";
  }
</script>

<div class="flex flex-col">
  <div
    class="px-8 py-4 mx-2 flex items-center text-gray-400 border-2 border-dashed
    rounded cursor-pointer"
    on:click={() => updateDisplayAddTaskModal(true)}>
    <PlusIcon size="20" />
    <span class="tracking-widest mx-4">Add Task</span>
  </div>
  {#each $tasks as task}
    {#if task.completed}
      <div class="px-8 py-4 flex">
        <span class="text-gray-400 tracking-widest line-through">
          {task.title}
        </span>
        <span class="text-gray-400 flex-1 text-right">
          {time(task.timestamp)}
        </span>
      </div>
    {:else}
      <div class="px-8 py-4 flex">
        <span class="tracking-widest">{task.title}</span>
        <span class="flex-1 text-right">{time(task.timestamp)}</span>
      </div>
    {/if}
  {/each}
</div>
