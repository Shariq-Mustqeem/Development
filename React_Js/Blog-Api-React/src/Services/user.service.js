import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const getUsers = () => apiService.get(API_URLS.USERS);
const login = (payload) => apiService.post(API_URLS.LOGIN, payload);
const register = (data) => apiService.post(API_URLS.REGISTER, data);

const getUserById = (userId) => apiService.get(`${API_URLS.USERS}/${userId}`);

const deleteUserById = (catId) =>
  apiService.delete(`${API_URLS.USERS}/${catId}`);

const addUser = (payload) => apiService.get(API_URLS.USERS, payload);

const updateUser = (userId, payload) =>
  apiService.put(`${API_URLS.USERS}/${userId}`, payload);

export const UserService = {
  login,
  register,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
  addUser,
};
