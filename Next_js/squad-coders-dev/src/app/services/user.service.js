"use client";

import MainApi from "utils/MainApi";
import { API_URL } from "serviceEndPoints/serviceEndPoints";

const getUser = () => {
  return MainApi.get(API_URL.USER);
};

const getUserById = (id) => {
  return MainApi.get(`${API_URL.USER}/${id}`);
};

const addUser = (data = {}) => {
  return MainApi.post(API_URL.USER, data);
};

const editUser = (id, payload = {}) => {
  return MainApi.put(`${API_URL.USER}/${id}`, payload);
};

const editPartialUser = (id, payload = {}) => {
  return MainApi.patch(`${API_URL.USER}/${id}`, payload);
};

const deleteUser = (id) => {
  return MainApi.delete(`${API_URL.USER}/${id}`);
};

export default userService = {
  getUser,
  getUserById,
  editUser,
  addUser,
  editPartialUser,
  delete: deleteUser,
};
