<script>
  import Output from "./Output.svelte";
  import QueryBox from "./QueryBox.svelte";
  import { selectedTable } from "./stores";
  let query = null;
  import "bulma/css/bulma.css";
  import Retailer from "./Retailer.svelte";
  import Distributor from "./Distributor.svelte";
  import Product from "./Product.svelte";

  function runQuery(e) {
    query = e.detail.query;
    console.log(query);
  }
  $: query = query;
</script>

<div class="main has-background-white">
  <div class="input_area">
    <QueryBox on:runQuery={runQuery} />
  </div>
  <div class="input_area">
    {#if $selectedTable == 1}
      <Distributor operation={"insert"} on:runQuery={runQuery} />
      <Distributor operation={"update"} on:runQuery={runQuery} />
      <Distributor operation={"delete"} on:runQuery={runQuery} />
    {:else if $selectedTable == 2}
      <Retailer operation={"insert"} on:runQuery={runQuery} />
      <Retailer operation={"update"} on:runQuery={runQuery} />
      <Retailer operation={"delete"} on:runQuery={runQuery} />
    {:else}
      <Product operation={"insert"} on:runQuery={runQuery} />
      <Product operation={"update"} on:runQuery={runQuery} />
      <Product operation={"delete"} on:runQuery={runQuery} />
    {/if}
  </div>

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
