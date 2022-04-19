function getBMI() {
    let height = document.getElementById("num-height").value / 100;
    let weight = document.getElementById("num-weight").value;

    let bmi = weight / (height * height);

    document.getElementById("txt-result").hidden = false;
    document.getElementById("txt-result").innerHTML = "Your BMI is " + Math.round(bmi) + ".";
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
                let [height, weight] = response.split(" ").splice(1, 2);

                document.getElementById("num-height").value = parseInt(height);
                document.getElementById("num-weight").value = parseInt(weight);

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
