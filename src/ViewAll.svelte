<script>
  //   import "../node_modules/bulma/css/bulma.css";
  import { createEventDispatcher } from "svelte";
  import { selectedTable } from "./stores";
  const dispatch = createEventDispatcher();
  function viewAll(e) {
    e.preventDefault();
    const tables = {
      1: "Distributor",
      2: "CSFA",
      3: "Product",
      4: "distributor_stock",
      5: "csfa_stock",
      6: "orders",
    };
    dispatch("runQuery", { query: `select * from ${tables[$selectedTable]}` });
  }
</script>

<button on:click={viewAll} class="button is-link is-dark">View All</button>

<style>
  button {
    align-self: center;
    margin-right: 20px;
  }
  /* div {
    margin: 20px;
    height: 170px;
    align-self: flex-end;
  } */
</style>
