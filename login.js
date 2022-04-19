function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let loginRequest = new XMLHttpRequest();
    loginRequest.onload = function () {
        let response = this.responseText;
        // alert(response);
        if (response === "-1") {
            alert("User does not exists!");
        } else if (response === "0") {
            alert("Login credentials do not match. Please try again later!")
        } else {
            setCookie("soul_session_2022", response, 30);
            open("./index.html", "_self");
        }
    };

    loginRequest.open(
        "GET", "login.php?" +
        "email=" + email +
        "&password=" + password
    );
    loginRequest.send();
}

function setCookie(key, value, expiry) {
  const date = new Date();
  date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

