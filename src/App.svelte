<script>
  import LoginForm from "./LoginForm.svelte";
  import Main from "./Main.svelte";
  let user = {
    username: null,
    password: null,
    loggedIn: false,
  };
  $: loggedIn = true;
  $: loggedIn, console.log(loggedIn);
  function setLoggedin() {
    loggedIn = true;
  }
</script>

{#if loggedIn}
  <main>
    <Main />
  </main>
{:else}
  <LoginForm {user} on:login={setLoggedin} />
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
