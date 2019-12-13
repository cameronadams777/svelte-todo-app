<script>
  import { onMount, createEventDispatcher } from "svelte";
  export let error;

  let visible = false;
  let dispatch = createEventDispatcher();

  onMount(() => {
    setTimeout(() => {
      visible = true;
      setTimeout(() => {
        visible = false;
        dispatch("clear");
      }, 2500);
    }, 10);
  });
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
    left: calc(100vw / 4);
    z-index: 10;
    transform: translateY(-100vh);
    transition: all 1s;
  }

  .visible {
    transform: translateY(0);
  }
</style>

<div class={visible ? 'toast visible' : 'toast'}>{error}</div>
