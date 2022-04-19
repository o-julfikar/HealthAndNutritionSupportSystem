function setCookie(key, value, expiry) {
  const date = new Date();
  date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

setCookie("soul_session_2022", "", 0);
open("./", "_self");
