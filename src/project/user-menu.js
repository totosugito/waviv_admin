import UsersMenu from "./user/users-menu";
import ProductMenu from "./product/product-menu";
import AuthenticationMenu from "./authentication/authentication-menu";
import DashboardMenu from "./dashboard/dashboard-menu";

// ==============================|| MENU ITEMS ||============================== //

const UserMenu = {
    items: [DashboardMenu, AuthenticationMenu, UsersMenu, ProductMenu]
};

export default UserMenu;
