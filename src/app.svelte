<script>
  import uuid from "uuid";
  import { onMount } from "svelte";
  import TodoGreetingSection from "./components/todo-greeting-section.svelte";
  import ProjectSelector from "./components/project-selector.svelte";
  import ProjectDetailTabs from "./components/project-detail-tabs.svelte";
  import CurrentProjectTasks from "./components/current-project-tasks.svelte";
  import CurrentProjectMembers from "./components/current-project-members.svelte";
  import CurrentProjectSettings from "./components/current-project-settings.svelte";
  import TheGlobalModal from "./components/the-global-modal.svelte";
  import Tailwindcss from "./components/tailwindcss.svelte";
  import { activeProjectDetailTab } from "./state/interface.js";
  import { retrieveProjects, initializeProjects } from "./state/todos.js";

  if (!document.cookie.includes("guid")) {
    document.cookie = `guid=${uuid()}`;
  }

  const projectDetailComponents = {
    tasks: CurrentProjectTasks,
    members: CurrentProjectMembers,
    settings: CurrentProjectSettings
  };

  onMount(async () => {
    const todos = await retrieveProjects();
    initializeProjects(todos);
  });
</script>

<section class="container mx-auto">
  <!-- Header Section -->
  <TodoGreetingSection />

  <!-- Projects Section -->
  <ProjectSelector />

  <!-- Project Details Section -->
  <ProjectDetailTabs />

  <svelte:component this={projectDetailComponents[$activeProjectDetailTab]} />
</section>
<TheGlobalModal />
