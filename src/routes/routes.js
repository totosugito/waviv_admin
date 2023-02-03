
export function getRouterUrl(showSlash, key) {
    let routers = {
        "root": "/",
        "home": "/home",
        "register": showSlash ? "/":"" + "register",
        "login": showSlash ? "/":"" + "login",
        "user-register-success": "/user-register-success",
        "dashboard": "/user-dashboard",
        "challenge-likert": "/challenge-likert",
    }
    return(routers[key])
}

export function getApiUrl(key) {
    let apis = {
        "register": "/api/user/register",
        "login": "/api/user/login",
        "user-get-data": "/api/user/get-data"
    }
    let url = apis[key]

    //showApiLog(url)
    return(url)
}