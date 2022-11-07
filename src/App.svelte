<script>
  import LoginForm from "./LoginForm.svelte";
  import "bulma/css/bulma.css";
  import { loggedInObservable } from "./stores.js";
  import Main from "./Main.svelte";
  import NavBar from "./NavBar.svelte";
  function logOut(e) {
    console.log("logging out");
    $loggedInObservable = false;
  }
</script>

{#if $loggedInObservable}
  <main>
    <NavBar on:logout={logOut} />
    <Main />
  </main>
{:else}
  <main>
    <LoginForm />
  </main>
{/if}

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
