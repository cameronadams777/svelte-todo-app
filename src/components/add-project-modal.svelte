<script>
  import AppModal from "./app-modal.svelte";
  import AppInputText from "./app-input-text.svelte";
  import AppButton from "./app-button.svelte";
  import { XIcon } from "svelte-feather-icons";
  import {
    addProject,
    retrieveProjects,
    initializeProjects
  } from "../state/todos.js";
  import {
    updateError,
    updateDisplayAddProjectModal
  } from "../state/interface.js";

  let projectTitle;
  let dueDate;

  async function attemptToAddNewProject() {
    try {
      let item = {
        title: projectTitle,
        due_date: dueDate,
        tasks: [],
        members: [],
        settings: {}
      };
      await addProject(item);
      const projects = await retrieveProjects();
      await initializeProjects(projects);
      updateDisplayAddProjectModal(false);
    } catch (error) {
      updateError(error);
    }
  }
</script>

<style lang="scss">
  .form-container {
    top: 50%;
    left: 50%;
    width: 400px;
    height: 600px;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 576px) {
      width: 100vw;
      height: 100vh;
    }
  }
  .close-icon {
    top: 5px;
    right: 5px;
  }
</style>

<AppModal>
  <div
    class="absolute flex flex-col justify-center items-center bg-white
    form-container rounded-lg">
    <span
      class="absolute close-icon cursor-pointer hover:text-gray-600"
      on:click={() => updateDisplayAddProjectModal(false)}>
      <XIcon size="30" />
    </span>
    <AppInputText placeholder="Project Title" bind:value={projectTitle} />
    <AppInputText placeholder="Due Date" bind:value={dueDate} />
    <AppButton on:click={attemptToAddNewProject}>Submit</AppButton>
  </div>
</AppModal>
