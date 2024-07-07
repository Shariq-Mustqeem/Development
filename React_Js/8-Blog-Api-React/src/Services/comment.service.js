import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const getComment = () => apiService.get(API_URLS.COMMENTS);

const deleteCommentById = (catId) =>
  apiService.delete(`${API_URLS.COMMENTS}/${catId}`);

const approveCommentById = (commitId) =>
  apiService.get(`${API_URLS.COMMENTS}/approve/${commitId}`);

const unapproveCommentById = (commitId) =>
  apiService.get(`${API_URLS.COMMENTS}/unapprove/${commitId}`);

export const CommentService = {
  getComment,
  deleteCommentById,
  approveCommentById,
  unapproveCommentById,
};
