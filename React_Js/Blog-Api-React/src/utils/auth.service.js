export const TOKEN = "TOKEN";
export const USERNAME = "USERNAME";

const saveToken = (token) => {
  if (!token) {
    return null;
  }
  localStorage.setItem(TOKEN, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

const userToken = (username) => {
  if (!username) {
    return null;
  }
  localStorage.setItem(USERNAME, username);
};

const isUserLoggedIn = () => {
  const tokenUser = localStorage.getItem(USERNAME);
  if (!tokenUser) {
    return false;
  }
  return true;
};

export const AuthService = {
  saveToken,
  removeToken,
  userToken,
  isUserLoggedIn,
};
