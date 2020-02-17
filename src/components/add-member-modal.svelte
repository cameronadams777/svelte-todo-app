<script>
  import moment from "moment";
  import AppModal from "./app-modal.svelte";
  import AppInputText from "./app-input-text.svelte";
  import AppButton from "./app-button.svelte";
  import { XIcon } from "svelte-feather-icons";
  import {
    projects,
    activeProjectIndex,
    updateProjectFields,
    retrieveProjects,
    initializeProjects
  } from "../state/todos.js";
  import {
    updateError,
    updateDisplayAddMemberModal
  } from "../state/interface.js";

  let memberName;

  async function attemptToAddNewMember() {
    try {
      // Create item with existing project
      const newProjectValue = {
        ...$projects[$activeProjectIndex],
        members: [...$projects[$activeProjectIndex].members, memberName]
      };
      await updateProjectFields(newProjectValue);
      const projects = await retrieveProjects();
      await initializeProjects(projects);
      updateDisplayAddMemberModal(false);
    } catch (error) {
      console.log(error);
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
      on:click={() => updateDisplayAddMemberModal(false)}>
      <XIcon size="30" />
    </span>
    <AppInputText placeholder="Name" bind:value={memberName} />
    <AppButton on:click={attemptToAddNewMember}>Submit</AppButton>
  </div>
</AppModal>
