import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const getPost = () => apiService.get(API_URLS.GET_POSTS);

const getPostById = (catId) => apiService.get(`${API_URLS.GET_POSTS}/${catId}`);

const deletePostById = (catId) =>
  apiService.delete(`${API_URLS.GET_POSTS}/${catId}`);

const addPost = (payload) => apiService.post(API_URLS.GET_POSTS, payload);

const updatePost = (catId, payload) =>
  apiService.put(`${API_URLS.GET_POSTS}/${catId}`, payload);

export const PostService = {
  getPost,
  getPostById,
  deletePostById,
  addPost,
  updatePost,
};
