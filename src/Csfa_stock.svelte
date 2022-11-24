<script>
  import { createEventDispatcher } from "svelte";
  let csfa_stock_id;
  let csfa_stock_quantity;
  let csfa_id;
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
      query = `insert into csfa_stock values(${csfa_stock_id},${csfa_stock_quantity},${csfa_id},${prod_id}})`;
    } else if (operation === "update") {
      query = `update csfa_stock set csfa_stock_quantity=${csfa_stock_quantity},csfa_id=${csfa_id},prod_id=${prod_id} where csfa_stock_id=${csfa_stock_id}`;
    } else {
      query = `delete from csfa_stock where csfa_stock_id=${csfa_stock_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="csfa_stock_form">
  <div>
    <input
      bind:value={csfa_stock_id}
      name="csfa_stock_id"
      type="text"
      class="input is-primary"
      placeholder="CSFA Stock Id"
      required
    />
  </div>
  <div>
    <input
      bind:value={csfa_stock_quantity}
      name="csfa_stock_quantity"
      type="text"
      class="input is-primary"
      placeholder="CSFA Stock Quantity"
      required
    />
  </div>
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
  .csfa_stock_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
