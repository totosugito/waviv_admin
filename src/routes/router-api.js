import {API_SERVER_URL} from "../config";

export function getRouterApi(key, param) {
    let apis = {
        "register-api": "/auth/register",
        "login-api": "/auth/login",
        "product-list-api": "products",
        "project-find": `${API_SERVER_URL}/project/find${param["value"]}`,
        "project-stat": `${API_SERVER_URL}/project/stat`
    }
    let url = apis[key]
    return(url)
}