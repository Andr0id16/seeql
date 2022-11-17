<script>
  import { createEventDispatcher } from "svelte";
  let prod_id;
  let prod_name;
  let prod_mrp;
  let prod_type;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `insert into product values(${prod_id},"${prod_name},${prod_type},${prod_mrp}")`;
    } else if (operation === "update") {
      query = `update product set prod_name=${prod_name},prod_type="${prod_type},prod_mrp=${prod_mrp} where prod_id=${prod_id}`;
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
    <input
      bind:value={prod_type}
      name="prod_type"
      type="text"
      class="input is-primary"
      placeholder="Product type"
      required
    />
  </div>
  <div>
    <input
      bind:value={prod_mrp}
      name="prod_mrp"
      type="int"
      class="input is-primary"
      placeholder="Product MRP"
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
