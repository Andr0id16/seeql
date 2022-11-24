<script>
  import { createEventDispatcher } from "svelte";
  let dist_id;
  let dist_name;
  let dist_ph;
  let dist_email;
  let dist_location;
  let dist_capacity;
  const dispatch = createEventDispatcher();
  export let operation;
  let query = null;
  function sendQuery(query) {
    dispatch("runQuery", { query: query });
  }
  function generateOperationQuery(e) {
    e.preventDefault();
    if (operation === "insert") {
      query = `insert into Distributor values(${dist_id},"${dist_name}","${dist_ph}","${dist_email}","${dist_location}",${dist_capacity})`;
    } else if (operation === "update") {
      query = `update Distributor set dist_name="${dist_name}",dist_ph="${dist_ph}",dist_email="${dist_email}",dist_location="${dist_location}",dist_capacity=${dist_capacity} where dist_id=${dist_id}`;
    } else {
      query = `delete from Distributor where dist_id=${dist_id}`;
    }
    sendQuery(query);
  }
</script>

<form class="dist_form">
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
      bind:value={dist_name}
      name="dist_name"
      type="text"
      class="input is-primary"
      placeholder="Distributor Name"
      required
    />
  </div>
  <div>
    <input
      bind:value={dist_ph}
      name="dist_ph"
      type="text"
      class="input is-primary"
      placeholder="Phone"
      required
    />
  </div>
  <div>
    <input
      bind:value={dist_email}
      name="dist_email"
      type="email"
      class="input is-primary"
      placeholder="Email"
      required
    />
  </div>
  <div>
    <input
      bind:value={dist_location}
      name="dist_location"
      type="text"
      class="input is-primary"
      placeholder="Location"
      required
    />
  </div>
  <div>
    <input
      bind:value={dist_capacity}
      name="dist_capacity"
      type="text"
      class="input is-primary"
      placeholder="Capacity"
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
  .dist_form {
    padding: 20px;
    border-radius: 4px;
  }
  input,
  button {
    margin-bottom: 8px;
  }
</style>
