<script>
  import { loggedInObeservable, LoginForm } from "./LoginForm.svelte";
  import "bulma/css/bulma.css";
  import Main from "./Main.svelte";
  import NavBar from "./NavBar.svelte";
  let user = {
    username: null,
    password: null,
    database: null,
    loggedIn: false,
  };
  let loggedIn = true;
  $: loggedIn, console.log(loggedIn);
  function setLoggedin() {
    loggedIn = true;
  }
  function unsetLoggedin(e) {
    console.log("logging out");
    loggedIn = false;
    user = {
      username: null,
      password: null,
      database: null,
      loggedIn: false,
    };
  }
  $: loggedIn, console.log(loggedIn);
</script>

{#key loggedIn}
  {#if loggedIn}
    <main>
      <NavBar on:logout={unsetLoggedin} />
      <Main />
    </main>
  {:else}
    <main>
      <LoginForm {user} on:login={setLoggedin} />
    </main>
  {/if}
{/key}

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
