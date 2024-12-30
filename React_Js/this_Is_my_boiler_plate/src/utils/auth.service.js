// const LOCAL_STORAGE_KEY = {
//     TOKEN: "token",
//     USER: "username"
// };

// const setLocalStorageUser = (user) => {
//     return localStorage.setItem(LOCAL_STORAGE_KEY.USER, user);
// };

// const setLocalStorageToken = (token) => {
//     return localStorage.setItem(LOCAL_STORAGE_KEY.USER, token);
// };

// const getLocalStorageUser = () => {
//     localStorage.getItem(LOCAL_STORAGE_KEY.USER);
//     if (token) return token;
//     else return null;
// };

// const getLocalStorageToken = (token) => {
//     localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);
//     if (token) return token;
//     else return null;
// };

// const removeLocalStorage = () => {
//     const deleteItems = localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN ?? LOCAL_STORAGE_KEY.USER);
//     return deleteItems;
// };

// const authService = {
//     setLocalStorageUser,
//     setLocalStorageToken,
//     getLocalStorageUser,
//     getLocalStorageToken,
//     removeLocalStorage
// };

const LOCAL_STORAGE_KEY = {
    TOKEN: "token",
    USER: "username"
};

const setLocalStorageUser = (user) => {
    if (typeof user !== "string") {
        throw new Error("User must be a string.");
    }
    localStorage.setItem(LOCAL_STORAGE_KEY.USER, user);
};

const setLocalStorageToken = (token) => {
    if (typeof token !== "string") {
        throw new Error("Token must be a string.");
    }
    localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, token);
};

const getLocalStorageUser = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY.USER) ?? null;
};

const getLocalStorageToken = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? null;
};

const removeLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEY.USER);
};
const clearAllLocalStorage = () => {
    localStorage.clear();
};

const authService = {
    clearAllLocalStorage,
    setLocalStorageUser,
    setLocalStorageToken,
    getLocalStorageUser,
    getLocalStorageToken,
    removeLocalStorage
};

export default authService;
