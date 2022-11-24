<script>
  import Output from "./Output.svelte";
  import QueryBox from "./QueryBox.svelte";
  import { selectedTable } from "./stores";
  let query = null;
  import "bulma/css/bulma.css";
  import CSFA from "./CSFA.svelte";
  import Distributor from "./Distributor.svelte";
  import Product from "./Product.svelte";
  import ViewAll from "./ViewAll.svelte";
  import Distributor_stock from "./Distributor_stock.svelte";
  import Csfa_stock from "./Csfa_stock.svelte";
  import Orders from "./Orders.svelte";

  let operations = ["insert", "update", "delete"];

  function runQuery(e) {
    query = e.detail.query;
    console.log(query);
  }
  $: query = query;
</script>

<div class="main has-background-white">
  <div class="input_area">
    <ViewAll on:runQuery={runQuery} />
    <QueryBox on:runQuery={runQuery} />
  </div>
  <div class="input_area">
    {#if $selectedTable == 1}
      {#each operations as operation}
        <Distributor {operation} on:runQuery={runQuery} />
      {/each}
    {:else if $selectedTable == 2}
      {#each operations as operation}
        <CSFA {operation} on:runQuery={runQuery} />
      {/each}
    {:else if $selectedTable == 3}
      {#each operations as operation}
        <Product {operation} on:runQuery={runQuery} />
      {/each}
    {:else if $selectedTable == 4}
      {#each operations as operation}
        <Distributor_stock {operation} on:runQuery={runQuery} />
      {/each}
    {:else if $selectedTable == 5}
      {#each operations as operation}
        <Csfa_stock {operation} on:runQuery={runQuery} />
      {/each}
    {:else if $selectedTable == 6}
      {#each operations as operation}
        <Orders {operation} on:runQuery={runQuery} />
      {/each}
    {/if}
  </div>
  <!-- Required to re-render when query changes -->
  {#key query}
    {#if query != null}
      <Output bind:query />
    {/if}
  {/key}
</div>

<style>
  .input_area {
    display: flex;
    justify-content: center;
  }
</style>
