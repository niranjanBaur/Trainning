let b = document.getElementById("submit_btn");

let cont = document.getElementById("container");

let logOut;
let isLoggedIn = false;

var msg 

b.addEventListener("click", () => {
  const user = {
    username: document.getElementById("username").value.trim(),
    password: document.getElementById("password").value.trim(),
  };

  localStorage.setItem(
    JSON.stringify(user.username),
    JSON.stringify(user.password)
  );

  cont.style.visibility = "collapse";

  msg = document.createElement("h1");
  var text = document.createTextNode("You are Already logged in , so you can log out");

  msg.appendChild(text);
  document.body.appendChild(msg);

  isLoggedIn = !isLoggedIn;

  if (isLoggedIn) {
    logOut = document.createElement("BUTTON");
    var text = document.createTextNode("Log Out");

    logOut.appendChild(text);
    document.body.appendChild(logOut);

    logOut.addEventListener("click", () => {
      localStorage.removeItem(JSON.stringify(user.username));
      cont.style.visibility = "visible";
      logOut.remove();
      msg.remove()
      isLoggedIn = !isLoggedIn;
    });
  }
});
