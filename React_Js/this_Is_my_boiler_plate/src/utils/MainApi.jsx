import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

const apiService = axios.create({
    baseUrl: BASE_URL
});

const ApiResponseHandler = (res) => res?.data ?? null;
const ApiRequestHandler = async (data = null, url, method, config = {}, isReturnHandler = false) => {
    try {
        const res = await apiService.request({
            data,
            url,
            method,
            config
        });
        return isReturnHandler ? res : ApiResponseHandler(res);
    } catch (error) {
        throw error;
    }
};

export const MainApiService = {
    get: (url, config = {}, isReturnHandler = false) => ApiRequestHandler("get", url, null, config, isReturnHandler),
    post: (data, url, config = {}) => ApiRequestHandler("post", data, url, config),
    put: (data, url, config = {}) => ApiRequestHandler("put", data, url, config),
    patch: (data, url, config = {}) => ApiRequestHandler("patch", data, url, config),
    delete: (url, config = {}) => ApiRequestHandler("delete", url, config)
};
