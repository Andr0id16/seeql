<script>
  import "bulma/css/bulma.css";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function logout(e) {
    dispatch("logout");
  }
</script>

<nav class="navbar">
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
</style>
