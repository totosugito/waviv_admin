
export function getRouterUrl(key, prefix="/") {
    let routers = {
        "landing-page": prefix + "landing-page",
        "404": prefix + "error-404",
        "default": "default",
        "root": prefix,
        "home": prefix + "home",
        "register": prefix + "register",
        "login": prefix + "login",
        "dashboard": prefix + "dashboard",
        "product": prefix + "product",
        "product-list": prefix + "product-list"
    }
    return(routers[key])
}