<script>
  import { PlusIcon } from "svelte-feather-icons";
  import { members } from "../state/todos.js";
  import { updateDisplayAddMemberModal } from "../state/interface.js";
</script>

<div class="flex flex-col">
  <div
    class="px-8 py-4 mx-2 flex items-center text-gray-400 border-2 border-dashed
    cursor-pointer"
    on:click={() => updateDisplayAddMemberModal(true)}>
    <PlusIcon size="20" />
    <span class="tracking-widest mx-4">Add Member</span>
  </div>
  {#each $members as member}
    <div class="px-8 py-4 flex">
      <span class="tracking-widest">{member}</span>
    </div>
  {/each}
</div>
