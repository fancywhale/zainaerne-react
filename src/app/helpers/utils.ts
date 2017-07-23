export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    const str = decodeURI(arr[2]);
    return isJson(str) ? JSON.parse(str) : str;
  }
  else {
    return null;
  }
}

export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function getCookieFromRequest(req, name) {
  if (!req.cookies) return null;
  if (!req.cookies[name]) {
    return null;
  }else if (isJson(req.cookies[name])) {
    return JSON.parse(req.cookies[name]);
  } else {
    return req.cookies[name];
  }
}