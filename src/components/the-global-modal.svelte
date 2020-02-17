<script>
  import AddProjectModal from "./add-project-modal.svelte";
  import AddMemberModal from "./add-member-modal.svelte";
  import AddTaskModal from "./add-task-modal.svelte";
  import {
    displayAddProjectModal,
    displayAddTaskModal,
    displayAddMemberModal
  } from "../state/interface.js";
</script>

{#if $displayAddProjectModal}
  <AddProjectModal />
{/if}

{#if $displayAddTaskModal}
  <AddTaskModal />
{/if}

{#if $displayAddMemberModal}
  <AddMemberModal />
{/if}
