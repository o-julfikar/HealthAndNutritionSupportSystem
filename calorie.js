function countCalorie() {
    let age = document.getElementById("num-age").value;
    let gender = null;
    document.getElementsByName("gender-radio").forEach(value => {
        if (value.checked) gender = value.value;
    })
    let height = document.getElementById("num-height").value;
    let weight = document.getElementById("num-weight").value;
    let exercise = document.getElementById("cbo-exercise").value.toLowerCase();

    let bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);

    if (gender === "female") bmr =  447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

    let calorie = null;

    switch (exercise) {
        case "none":
            calorie = bmr * 1.2;
            break;
        case "light":
            calorie = bmr * 1.375;
            break;
        case "moderate":
            calorie = bmr * 1.55;
            break;
        case "intense":
            calorie = bmr * 1.725;
            break;
        default:
            calorie = bmr * 1.9;
            break;
    }

    document.getElementById("txt-result").hidden = false;
    document.getElementById("txt-result").innerHTML = "Your calorie count is " + Math.round(calorie) + ".";
}

let chk_self = document.getElementById("chk-self");

chk_self.onchange = getSelfInfo;

function getSelfInfo(e) {
    if (e.target.checked) {
        let selfInfoRequest = new XMLHttpRequest();
        selfInfoRequest.onload = function () {
            let response = this.responseText;
            if (response === "-1") {

            } else if (response === "0") {

            } else if (response.startsWith("soul_success")) {
                let [height, weight, age, gender] = response.split(" ").splice(1, 4);

                document.getElementById("num-height").value = parseInt(height);
                document.getElementById("num-weight").value = parseInt(weight);
                document.getElementById("num-age").value = parseInt(age);

                gender = gender.toLowerCase();

                if (gender === "male") {
                    document.getElementById("chk-male").checked = true;
                } else if (gender === "female") {
                    document.getElementById("chk-female").checked = true;
                } else {
                    alert(gender)
                }
            }
        }

        selfInfoRequest.open(
            "GET", "self.php?session_key=" + getCookie("soul_session_2022")
        )
        selfInfoRequest.send();
    }
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
