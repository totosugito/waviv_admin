export function getRouterApi(key) {
    let apis = {
        "register": "/auth/register",
        "login": "/auth/login",
        "product-list": "products",
    }
    let url = apis[key]
    return(url)
}