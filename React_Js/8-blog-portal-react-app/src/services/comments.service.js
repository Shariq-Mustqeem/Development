import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const getComments = () => apiService.get(API_URLS.GET_COMMENTS);

const deleteCommentsById = (commentsId) =>
  apiService.delete(`${API_URLS.GET_COMMENTS}/${commentsId}`);

export const CommentsService = {
  getComments,
  deleteCommentsById,
};
