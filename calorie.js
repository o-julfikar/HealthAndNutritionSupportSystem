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

    alert(calorie)
}

