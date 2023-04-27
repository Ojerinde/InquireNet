export function ValidateEmail(email: string) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (email.match(reg)) {
    return true;
  }
  return false;
}

export function ValidatePassword(password: string) {
  const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  if (reg.test(password)) {
    return true;
  }
  return false;
}

export function SetItemToLocalStorage(key: string, payload: any) {
  localStorage.setItem(key, JSON.stringify(payload));
}

export function GetItemFromLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  if (item === null) {
    return undefined;
  }
  return JSON.parse(item);
}

export function RemoveItemFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
