const CHECK_ENDPOINT = "http://localhost:3000/usercheck";
function findUser(username, password) {
  return fetch(CHECK_ENDPOINT, {
    method: "post",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
}

module.exports.findUser = findUser;
