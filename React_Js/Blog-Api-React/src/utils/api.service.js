import axios from "axios";

const apiSauceInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
const globalHeaders = {
  headers: {
    "content-type": "application/json",
  },
};
const get = (url, params = {}) => apiSauceInstance.get(url, params);

const post = (url, data = {}, paramHeader = globalHeaders) =>
  apiSauceInstance.post(url, data, paramHeader);

const put = (url, data = {}) =>
  apiSauceInstance.put(url, data, (url, data, globalHeaders));

const patch = (url, data = {}) =>
  apiSauceInstance.patch(url, data, globalHeaders);

const deleteRequest = (url, params = {}) =>
  apiSauceInstance.delete(url, params);

export const apiService = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};
