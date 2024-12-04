"use client";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiService = axios.create({
  baseURL: BASE_URL,
});

const ApiResponseHandler = (response) => response?.data;

const ApiRequestHandler = async (
  method,
  url,
  data = null,
  requestConfig = {},
  isReturnAllResponse = false
) => {
  try {
    const response = await apiService.request({
      method,
      url,
      data,
      ...requestConfig,
    });
    return isReturnAllResponse ? response : ApiResponseHandler(response);
  } catch (error) {
    if (error?.response?.status === 401) {
      console.error(error);
    }
    throw error;
  }
};

const MainApi = {
  get: (url, config = {}, isReturnAllResponse = false) =>
    ApiRequestHandler("get", url, null, config, isReturnAllResponse),

  post: (url, data, requestConfig = {}) =>
    ApiRequestHandler("post", url, data, requestConfig),

  put: (url, data, requestConfig = {}) =>
    ApiRequestHandler("put", url, data, requestConfig),

  patch: (url, data, requestConfig = {}) =>
    ApiRequestHandler("patch", url, data, requestConfig),

  delete: (url, config = {}) => ApiRequestHandler("delete", url, null, config),
};

export default MainApi;
