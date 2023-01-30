import UsersMenu from "../pages/users/users-menu";
import ProductsMenu from "../pages/products/products-menu";
import AuthenticationMenu from "../pages/authentication/authentication-menu";
import DashboardMenu from "./dashboard/dashboard-menu";

// ==============================|| MENU ITEMS ||============================== //

const MenuItems = {
    items: [DashboardMenu, AuthenticationMenu, UsersMenu, ProductsMenu]
};

export default MenuItems;
