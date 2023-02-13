
export function getRouterUrl(key, prefix="/") {
    let routers = {
        "root": "/",
        "home": prefix + "home",
        "register": prefix + "register",
        "login": prefix + "login",
        "dashboard": prefix + "dashboard/default"
    }
    return(routers[key])
}