function getBMI() {
    let height = document.getElementById("num-height").value / 100;
    let weight = document.getElementById("num-weight").value;

    let bmi = weight / (height * height);

    document.getElementById("txt-result").hidden = false;
    document.getElementById("txt-result").innerHTML = "Your BMI is " + Math.round(bmi) + ".";
}
