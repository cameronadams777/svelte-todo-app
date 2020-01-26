<script>
  import { error, clearError } from "../state/interface.js";
</script>

<style>
  .toast {
    padding: 0.5rem 1rem;
    background-color: hsl(348, 100%, 61%);
    color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 1rem;
    margin: 0 auto;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%, -100vh);
    z-index: 10;
    transition: all 1s;
  }

  .visible {
    transform: translate(-50%, 0);
  }
</style>

<div class={$error.visible ? 'toast visible' : 'toast'}>{$error.value}</div>
