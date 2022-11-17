<script>
  import { createEventDispatcher } from "svelte";
  import "../node_modules/bulma/css/bulma.css";
  const dispatch = createEventDispatcher();
  let query = null;
  function sendQuery(e) {
    dispatch("runQuery", { query: query });
  }
</script>

<div class="query_box_container has-background-success-light">
  <div class="field has-addons">
    <div class="control">
      <input
        bind:value={query}
        class="query_box_input input is-medium"
        type="text"
        placeholder="Run a Query..."
      />
    </div>
    <div class="control">
      <button class="button is-medium is-primary" on:click={sendQuery}>
        run
      </button>
    </div>
  </div>
</div>

<style>
  .query_box_container {
    margin: 20px;
  }

  .query_box_input {
    width: 400px;
  }
</style>
