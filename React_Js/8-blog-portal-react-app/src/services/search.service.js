import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const serachPost = (data) => apiService.post(API_URLS.GET_SEARCH, data);

export const SerachService = {
  serachPost,
};
