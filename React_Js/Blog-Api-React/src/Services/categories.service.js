import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const getCategory = () => apiService.get(API_URLS.GET_CATEGORY);

const getCategoryById = (catId) =>
  apiService.get(`${API_URLS.GET_CATEGORY}/${catId}`);

const deleteCategoryById = (catId) =>
  apiService.delete(`${API_URLS.GET_CATEGORY}/${catId}`);

const addCategory = (payload) =>
  apiService.post(API_URLS.GET_CATEGORY, payload);

const updateCategory = (catId, payload) =>
  apiService.put(`${API_URLS.GET_CATEGORY}/${catId}`, payload);

export const CategoryService = {
  getCategory,
  getCategoryById,
  deleteCategoryById,
  addCategory,
  updateCategory,
};
