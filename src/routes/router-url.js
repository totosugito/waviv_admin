
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
        "product-list": prefix + "product-list",
        "ui-avatar": prefix + "ui-avatar",
        "upwork-landing-page": prefix + "upwork-landing-page",
    }
    return(routers[key])
}