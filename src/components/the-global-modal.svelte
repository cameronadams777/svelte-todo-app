<script>
  import AddProjectModal from "./add-project-modal.svelte";
  import AddTaskModal from "./add-task-modal.svelte";
  import {
    displayAddProjectModal,
    displayAddTaskModal
  } from "../state/interface.js";
</script>

{#if $displayAddProjectModal}
  <AddProjectModal />
{/if}

{#if $displayAddTaskModal}
  <AddTaskModal />
{/if}
