<script>
  import Output from "./Output.svelte";
  import QueryBox from "./QueryBox.svelte";
  let query = null;
  import "bulma/css/bulma.css";
  function runQuery(e) {
    query = e.detail.query;
    console.log(query);
  }
  $: query = query;
</script>

<div class="has-background-white">
  <QueryBox on:runQuery={runQuery} />

  {#key query}
    {#if query != null}
      <Output bind:query />
    {/if}
  {/key}
</div>
