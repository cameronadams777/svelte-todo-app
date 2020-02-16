<script>
  import { totalTasks } from "../state/todos.js";
</script>

<div class="flex flex-col pt-12 pr-8 pb-4 pl-3">
  <span class="text-2xl font-bold mb-3">Hey there,</span>
  <span class="text-xl tracking-widest">
    You have {$totalTasks} pending tasks
  </span>
</div>
