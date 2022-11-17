<script>
  import "bulma/css/bulma.css";
  import { selectedTable } from "./stores";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function logout(e) {
    dispatch("logout");
  }
  import Select from "svelte-select";

  let items = [
    { value: "Distributor", label: "Distributor" },
    { value: "Retailer", label: "Retailer" },
    { value: "Product", label: "Product" },
    { value: "Supply", label: "Supply" },
  ];

  let value = { value: "Distributor", label: "Distributor" };

  function handleSelect(event) {
    console.log("selected item", event.detail);
    if (event.detail.value === "Distributor") $selectedTable = 1;
    else if (event.detail.value === "Retailer") $selectedTable = 2;
    else if (event.detail.value === "Product") $selectedTable = 3;
    else $selectedTable = 4;
  }
</script>

<nav class="navbar has-background-success-light">
  <div class="navbar-item">
    <div class="tables">
      <Select {items} {value} on:select={handleSelect} />
    </div>
  </div>
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <button class="button is-link is-dark" on:click={logout}>
          <strong>Log Out</strong>
        </button>
      </div>
    </div>
  </div>
</nav>

<style>
  .tables {
    width: 200px !important;
  }
  .navbar {
    margin-bottom: 20px;
  }
</style>
