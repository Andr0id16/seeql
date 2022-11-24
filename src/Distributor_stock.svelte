<script>
  import { createEventDispatcher } from "svelte";
  let dist_stock_id;
  let dist_stock_quantity;
  let dist_id;
  let prod_id;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `insert into distributor_stock values(${dist_stock_id},${dist_stock_quantity},${dist_id},${prod_id})`;
    } else if (operation === "update") {
      query = `update distributor_stock set dist_stock_quantity=${dist_stock_quantity},dist_id=${dist_id},prod_id=${prod_id} where dist_stock_id=${dist_stock_id}`;
    } else {
      query = `delete from distributor_stock where dist_stock_id=${dist_stock_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="dist_stock_form">
  <div>
    <input
      bind:value={dist_stock_id}
      name="dist_stock_id"
      type="text"
      class="input is-primary"
      placeholder="Distributor Stock Id"
      required
    />
  </div>
  <div>
    <input
      bind:value={dist_stock_quantity}
      name="dist_stock_quantity"
      type="text"
      class="input is-primary"
      placeholder="Distributor Stock Quantity"
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
    <button on:click={generateOperationQuery} class="button is-link is-dark"
      >{operation}</button
    >
  </div>
  <br />
</form>

<style>
  .dist_stock_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
