const access = require("./db/access");

const showUsers = wallet => {
  let users = access.getUsers();
  users = users.filter(user => wallet in user);
  const lines = users.map(user => `<li>${user._name} - ${user[wallet]}</li>`);
  document.getElementById("@dashboard/content").innerHTML = lines.join("");
  document.getElementById("@dashboard");
};

document.getElementById("@signin-form").addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("@signin-form/id").value;
  const users = access.getUsers();
  const user = users.some(user => user._id == id);
  if (user) {
    document.getElementById("@signin-form").classList.add("closed");
    document.getElementById("@dashboard").classList.remove("closed");
    showUsers("btc");
  }
});

const buttons = Array.from(document.getElementsByClassName("nav"));
buttons.forEach(element => {
  element.addEventListener("click", event => {
    const wallet = event.target.innerText;
    showUsers(wallet);
    buttons.forEach(button => {
      button.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
