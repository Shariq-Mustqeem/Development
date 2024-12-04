import { API_URLS } from "../serviceEndPoint/serviceEndPoint";
import { MainApiService } from "../utils/MainApi";

const user = () => MainApiService.get(API_URLS.USER);
const getUserById = (id) => MainApiService.get(`${API_URLS.USER}/${id}`);
const addUser = (data = {}, id) => MainApiService.post(`${API_URLS.USER}/${id}`, data);
const editUser = (payload = {}, id) => MainApiService.put(`${API_URLS.USER}/${id}`, payload);
const editPartialUser = (payload = {}, id) => MainApiService.patch(`${API_URLS.USER}/${id}`, payload);
const deleteUser = () => MainApiService.delete(API_URLS.USER);

export { addUser, deleteUser, editPartialUser, editUser, getUserById, user };
