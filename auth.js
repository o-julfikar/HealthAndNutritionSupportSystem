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

let session = getCookie('soul_session_2022');

if (session === "") {
    open("./login.html", "_self");
} else {
    if (document.getElementById("diet-plan"))
        document.getElementById("diet-plan").hidden = false;
    document.getElementById("sign-in").hidden = true;
    document.getElementById("sign-up").hidden = true;
    document.getElementById("sign-out").hidden = false;
}

