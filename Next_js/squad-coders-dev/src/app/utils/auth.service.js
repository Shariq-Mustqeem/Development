"use client";
export const LOCAL_STORAGE_KEY = {
  TOKEN: "token",
  USER: "username",
};

const setLocalStorageToken = (token) => {
  return localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, token);
};

const setLocalStorageUserName = (user) => {
  return localStorage.setItem(LOCAL_STORAGE_KEY.USER, user);
};

const getLocalStorageToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);

  if (token) return token;
  else return null;
};

const getLocalStorageUser = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.USER);

  if (token) return token;
  else return null;
};

const removeLocalStorage = () => {
  const deleteItems = localStorage.removeItem(
    LOCAL_STORAGE_KEY.TOKEN ?? LOCAL_STORAGE_KEY.USER
  );
  return deleteItems;
};

export const authService = {
  setLocalStorageToken,
  setLocalStorageUserName,
  getLocalStorageToken,
  getLocalStorageUser,
  removeLocalStorage,
};
