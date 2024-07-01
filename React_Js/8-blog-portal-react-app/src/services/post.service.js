import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const getPost = () => apiService.get(API_URLS.GET_POST);

const getPostById = (postId) =>
  apiService.get(`${API_URLS.GET_POST}/${postId}`);

const deletePostById = (postId) =>
  apiService.delete(`${API_URLS.GET_POST}/${postId}`);

const addPosts = (payload) => apiService.post(API_URLS.GET_POST, payload);

export const PostsService = {
  getPost,
  getPostById,
  deletePostById,
  addPosts,
};
