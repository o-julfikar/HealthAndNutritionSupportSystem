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
            } else if (response.startsWith("soul_success")) {
                response = response.split(" ")[1];
                setCookie("soul_session_2022", response, 30);
                open("./index.html", "_self");
            } else {
                alert("An unknown error occurred. Please try again!");
                document.getElementById("hola").innerHTML = response
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
