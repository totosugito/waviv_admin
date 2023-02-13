export function getRouterApi(key) {
    let apis = {
        "register": "/auth/register",
        "login": "/auth/login",
    }
    let url = apis[key]
    return(url)
}