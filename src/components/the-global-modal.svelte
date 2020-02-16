<script>
  import AddProjectModal from "./add-project-modal.svelte";
  import { displayAddProjectModal } from "../state/interface.js";
</script>

{#if $displayAddProjectModal}
  <AddProjectModal />
{/if}
