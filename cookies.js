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

export {
  setCookie,
  getCookie
}
