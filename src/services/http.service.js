import axios from "axios";

import config from "../config";

const http = axios.create({ baseURL: `${config.baseURL}/` });

function get(url, headers = {}, params = {}) {
    return http.get(url, {
        params: {
            ...params
        },
        headers: { ...headers },
    });
}

function post(url, data, headers = {}, params = {}) {
    return http.post(url, data, {
        params: {
            ...params
        },
        headers: { ...headers },
    });
}

function put(url, data, headers = {}) {
    return http.put(url, data, { headers: { ...headers } });
}

function remove(url, data, headers = {}) {
    return http.delete(url, {
        headers: { ...headers },
        data,
    });
}

export default {
    http,
    get,
    post,
    put,
    remove,
};
