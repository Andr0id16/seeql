<script>
  import { createEventDispatcher } from "svelte";
  let csfa_id;
  let csfa_name;
  let csfa_location;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(e) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery() {
    if (operation === "insert") {
      query = `insert into CSFA values(${csfa_id},"${csfa_name}","${csfa_location}")`;
    } else if (operation === "update") {
      query = `update CSFA set csfa_name="${csfa_name}",csfa_location="${csfa_location}" where csfa_id=${csfa_id}`;
    } else {
      query = `delete from CSFA where csfa_id=${csfa_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="csfa_form">
  <div>
    <input
      bind:value={csfa_id}
      name="csfa_id"
      type="text"
      class="input is-primary"
      placeholder="CSFA Id"
      required
    />
  </div>
  <div>
    <input
      bind:value={csfa_name}
      name="csfa_name"
      type="text"
      class="input is-primary"
      placeholder="CSFA Name"
      required
    />
  </div>
  <div>
    <input
      bind:value={csfa_location}
      name="csfa_location"
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
  .csfa_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
