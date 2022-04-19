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

    if (password !== confirmPassword) {
        alert("Confirmation password did not matched with password")
    } else {

        const registerRequest = new XMLHttpRequest();
        registerRequest.onload = function () {
            let response = this.responseText;
            if (response === "-1") {
                alert("User already exists!");
            } else if (response === "0") {
                alert("Failed to register. Please try again later!")
            } else {
                setCookie("soul_session_2022", response, 30);
                open("./index.html");
            }
        }

        registerRequest.open(
            "GET", "register.php?" +
            "email=" + email +
            "&password=" + password +
            "&name=" + name +
            "&gender=" + gender +
            "&birthdate=" + birthdate +
            "&height=" + height +
            "&weight=" + weight
        );

        registerRequest.send();
    }
}

function setCookie(key, value, expiry) {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

function getCookie(key) {
    let cookieDb = document.cookie.split(";")
    for (let i = 0; i < cookieDb.length; i++) {
        let cookie = cookieDb[i].trim();
        if (cookie.startsWith(key)) {
            return cookie.substring(key.length + 1);
        }
    }
    return "";
}
