<script>
  import { createEventDispatcher } from "svelte";
  let ret_id;
  let ret_name;
  let location;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(e) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery() {
    if (operation === "insert") {
      query = `insert into retailer values(${ret_id},${ret_name},${location})`;
    } else if (operation === "update") {
      query = `update retailer set name=${ret_name},location=${location} where ret_id=${ret_id}`;
    } else {
      query = `delete from retailer where ret_id=${ret_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="ret_form">
  <div>
    <input
      bind:value={ret_id}
      name="ret_id"
      type="text"
      class="input is-primary"
      placeholder="Retailer Id"
      required
    />
  </div>
  <div>
    <input
      bind:value={ret_name}
      name="ret_name"
      type="text"
      class="input is-primary"
      placeholder="Retailer Name"
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
  .ret_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
