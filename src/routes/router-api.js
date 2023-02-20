export function getRouterApi(key) {
    let apis = {
        "register-api": "/auth/register",
        "login-api": "/auth/login",
        "product-list-api": "products",
    }
    let url = apis[key]
    return(url)
}