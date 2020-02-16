<script>
  import moment from "moment";
  import { PlusIcon } from "svelte-feather-icons";
  import {
    projects,
    activeProjectIndex,
    updateActiveProjectIndex
  } from "../state/todos.js";
  import { updateDisplayAddProjectModal } from "../state/interface.js";
</script>

<style lang="scss">
  .active {
    background-image: linear-gradient(150deg, #734ae8 0%, #89d4cf 99%);
  }

  .card {
    flex: 1 0 30%;

    @media only screen and (max-width: 1023px) {
      flex: 1 0 40%;
    }
  }
</style>

<div class="py-4 px-3 mb-4 flex overflow-x-scroll">
  {#if $projects.length}
    {#each $projects as project, index}
      {#if index === $activeProjectIndex}
        <div
          class="border-0 rounded-lg p-3 h-40 flex flex-col justify-end ml-2
          card active">
          <span class="text-white text-base tracking-wider mb-6">
            {project.title}
          </span>
          <span class="text-gray-300 text-xs">
            {moment(project.due_date).format('MMM DD')}
          </span>
        </div>
      {:else}
        <div
          class="border-0 rounded-lg p-3 h-40 flex flex-col justify-end ml-2
          card shadow-lg"
          on:click={() => updateActiveProjectIndex(index)}>
          <span class="text-base tracking-wider mb-6">{project.title}</span>
          <span class="text-green-800 text-xs">
            {moment(project.due_date).format('MMM DD')}
          </span>
        </div>
      {/if}
    {/each}
  {/if}
  <div
    class="card border-0 rounded-lg p-3 h-40 flex flex-col justify-center
    items-center mx-2 border-dashed border-2 text-gray-400 cursor-pointer"
    on:click={() => updateDisplayAddProjectModal(true)}>
    <PlusIcon size="20" />
    <span>Add Project</span>
  </div>
</div>
