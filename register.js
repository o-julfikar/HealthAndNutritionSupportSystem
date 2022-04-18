import {setCookie} from "./cookies";
import {getCookie} from "./cookies";

function register() {
  let name = document.getElementById("txt-name").value;
  let gender = null;
  document.getElementsByName("gender-radio").forEach(sex => {
    if (sex.checked) gender = sex.value;
  });
  let birthdate = document.getElementById("txt-birthdate").value;
  let height = document.getElementById("num-height").value;
  let weight = document.getElementById("num-weight").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("password-confirm").value;

  const registerRequest = new XMLHttpRequest();
  registerRequest.onload = function () {
    // open("login.html")
  }

  registerRequest.open(
    "GET", "register.php?" +
    "email=" + email +
    "&pass=" + password +
    "&name=" + name +
    "&birthdate=" + birthdate +
    "&height=" + height +
    "&weight=" + weight
  );
}
