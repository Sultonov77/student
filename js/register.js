// register form
let elRegisterForm = document.querySelector(".register-form");
elRegisterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (/^\d+$/.test(password) && /[a-zA-z]/.test(username)) {
    window.location.href = "index.html";
    alert("Please input your new password and new username to login section");
  } else {
    alert("Password includes only numbers and Username includes only letters");
  }
});
// finished
