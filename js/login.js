// login form
let elForm = document.querySelector(".myForm");
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (/^\d+$/.test(password) && /^[a-zA-Z]+$/.test(username)) {
    // save to local storage
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));

    window.location.href = "admin.html";
  } else {
    alert(
      "Password should include only numbers and Username should include only letters"
    );
  }
});

// sign in link
function signin() {
  window.location.href = "register.html";
}
// finished
