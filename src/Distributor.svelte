<script>
  import { createEventDispatcher } from "svelte";
  let dist_id;
  let dist_name;
  let location;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `insert into distributor values(${dist_id},"${dist_name}","${location}")`;
    } else if (operation === "update") {
      query = `update distributor set dist_name="${dist_name}",location="${location}" where dist_id=${dist_id}`;
    } else {
      query = `delete from distributor where dist_id=${dist_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="dist_form">
  <div>
    <input
      bind:value={dist_id}
      name="dist_id"
      type="text"
      class="input is-primary"
      placeholder="Distributor Id"
      required
    />
  </div>
  <div>
    <input
      bind:value={dist_name}
      name="dist_name"
      type="text"
      class="input is-primary"
      placeholder="Distributor Name"
      required
    />
  </div>
  <div>
    <input
      bind:value={location}
      name="location"
      type="text"
      class="input is-primary"
      placeholder="Location"
      required
    />
  </div>

  <div>
    <button on:click={generateOperationQuery} class="button is-link is-dark"
      >{operation}</button
    >
  </div>
  <br />
</form>

<style>
  .dist_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
