<script>
  import { createEventDispatcher } from "svelte";
  let sup_id;
  let dist_id;
  let prod_id;

  let quantity;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `insert into supply values(${sup_id},${dist_id},${prod_id},${quantity},)`;
    } else if (operation === "update") {
      query = `update supply set dist_id=${sup_id},prod_id_id=${prod_id},quantity=${quantity} where sup_id=${sup_id}`;
    } else {
      query = `delete from supply where sup_id=${sup_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="sup_form">
  <div>
    <input
      bind:value={sup_id}
      name="sup_id"
      type="text"
      class="input is-primary"
      placeholder="Supply Id"
      required
    />
  </div>
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
      bind:value={quantity}
      name="quantity"
      type="int"
      class="input is-primary"
      placeholder="Quantity"
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
  .sup_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
