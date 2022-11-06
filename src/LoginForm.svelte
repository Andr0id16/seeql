<script>
  import "../node_modules/bulma/css/bulma.css";
  import { findUser } from "./login";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let user;
  let username = null;
  let password = null;
  let database = null;

  function authenticateUser(e) {
    e.preventDefault();
    console.log("sending user credentials");
    findUser(username, password, database)
      .then((res) => res.json())
      .then((res) => {
        if (res.loginSuccessful)
          dispatch(
            "login",
            (user = {
              username: username,
              password: password,
              loggedIn: true,
            })
          );
      })
      .catch((error) => {
        console.group("Unable to authenticate");
        console.error(error);
        console.error("Cannot Login");
        console.groupEnd();
      });
  }
</script>

<div class=" modal is-active ">
  <div class="model-content">
    <form class="box">
      <div>
        <input
          bind:value={username}
          name="username"
          type="text"
          class="input is-primary"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          bind:value={password}
          name="password"
          type="password"
          class="input is-primary"
          placeholder="Password"
        />
      </div>
      <div>
        <input
          bind:value={database}
          name="password"
          type="database"
          class="input is-primary"
          placeholder="Database"
        />
      </div>
      <div>
        <button on:click={authenticateUser} class="button is-link is-dark"
          >Login</button
        >
      </div>
      <br />
    </form>
  </div>
</div>

<style>
  input,
  button {
    margin-bottom: 8px;
  }
  /* input {
    color: black;
  } */
  form {
    background-color: hsl(140, 70%, 88%);
  }
</style>
