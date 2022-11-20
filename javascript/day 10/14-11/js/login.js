const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");


document.getElementById("create-account-toggle").addEventListener("click", function() {
  registerForm.style.display = "block";
  loginForm.style.display = "none";

})

document
  .getElementById("login-toggle")
  .addEventListener("click", function () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });
