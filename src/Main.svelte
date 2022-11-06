<script>
  import Output from "./Output.svelte";
  import QueryBox from "./QueryBox.svelte";
  let query = null;
  function runQuery(e) {
    query = e.detail.query;
    console.log(query);
  }
  $: query = query;
</script>

<div>
  <QueryBox on:runQuery={runQuery} />

  {#key query}
    {#if query != null}
      <Output bind:query />
    {/if}
  {/key}
</div>
