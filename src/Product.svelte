<script>
  import { createEventDispatcher } from "svelte";
  let prod_id;
  let prod_name;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `operation into product values(${prod_id},${prod_name})`;
    } else if (operation === "update") {
      query = `update product set name=${prod_name} where prod_id=${prod_id}`;
    } else {
      query = `delete from product where prod_id=${prod_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="prod_form">
  <div>
    <input
      bind:value={prod_id}
      name="prod_id"
      type="text"
      class="input is-primary"
      placeholder="Product Id"
      required
    />
  </div>
  <div>
    <input
      bind:value={prod_name}
      name="prod_name"
      type="text"
      class="input is-primary"
      placeholder="Product Name"
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
  .prod_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
