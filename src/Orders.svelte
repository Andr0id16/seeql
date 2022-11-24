<script>
  import { createEventDispatcher } from "svelte";
  let order_id;
  let csfa_id;
  let dist_id;
  let prod_id;
  let order_quantity;
  let order_cost;

  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `insert into orders values(${order_id},${csfa_id},${dist_id},${prod_id},${order_quantity},${order_cost})`;
    } else if (operation === "update") {
      query = `update orders set csfa_id=${csfa_id},dist_id=${dist_id},prod_id=${prod_id},order_quantity=${order_quantity},order_cost=${order_cost} where order_id=${order_id}`;
    } else {
      query = `delete from orders where order_id=${order_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="order_form">
  <div>
    <input
      bind:value={order_id}
      name="order_id"
      type="text"
      class="input is-primary"
      placeholder="Order Id"
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
      bind:value={order_quantity}
      name="order_quantity"
      type="text"
      class="input is-primary"
      placeholder="Quantity"
      required
    />
  </div>
  <div>
    <input
      bind:value={order_cost}
      name="order_cost"
      type="text"
      class="input is-primary"
      placeholder="Cost"
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
  .order_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
