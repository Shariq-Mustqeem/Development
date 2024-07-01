import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const register = (payload) => apiService.post(API_URLS.REGISTER, payload);

const login = (payload) => apiService.post(API_URLS.LOGIN, payload);

const getUsers = () => apiService.get(API_URLS.GET_USERS);

const deleteUsersById = (userId) =>
  apiService.delete(`${API_URLS.GET_USERS}/${userId}`);

const addUsers = (payload) => apiService.get(API_URLS.GET_USERS, payload);

export const UserService = {
  login,
  register,
  getUsers,
  deleteUsersById,
  addUsers,
};
