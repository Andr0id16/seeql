<script>
  import { createEventDispatcher } from "svelte";
  import "../node_modules/bulma/css/bulma.css";
  const dispatch = createEventDispatcher();
  let query = null;
  function sendQuery(e) {
    dispatch("runQuery", { query: query });
  }
</script>

<div class="section columns is-centered">
  <div class="query_box column is-half columns is-centered">
    <div class=" field has-addons column is-half">
      <div class="control">
        <input
          bind:value={query}
          class="input is-medium"
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
</div>
