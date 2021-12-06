import httpService from "./http.service";

export const getProducts = (params) =>
    httpService
        .get("/products", {}, params)
        .then(({ data }) => data)
        .catch((err) => Promise.reject(err.response.data));
