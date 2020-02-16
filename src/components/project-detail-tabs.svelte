<script>
  import {
    activeProjectDetailTab,
    updateActiveProjectDetailTab
  } from "../state/interface.js";
</script>

<div class="flex mb-4">
  <span
    class="{$activeProjectDetailTab === 'tasks' ? 'font-bold' : 'text-gray-400'}
    tracking-widest flex-1 text-center cursor-pointer"
    on:click={() => updateActiveProjectDetailTab('tasks')}>
    Tasks
  </span>
  <span
    class="{$activeProjectDetailTab === 'members' ? 'font-bold' : 'text-gray-400'}
    tracking-widest flex-1 text-center cursor-pointer"
    on:click={() => updateActiveProjectDetailTab('members')}>
    Members
  </span>
  <span
    class="{$activeProjectDetailTab === 'settings' ? 'font-bold' : 'text-gray-400'}
    tracking-widest flex-1 text-center cursor-pointer"
    on:click={() => updateActiveProjectDetailTab('settings')}>
    Settings
  </span>
</div>
