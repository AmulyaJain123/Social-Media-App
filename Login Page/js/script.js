let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signinBtn.classList.remove("disable");
  signupBtn.classList.add("disable");
}

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
}

document.getElementById("helpButton").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
