import { useRoutes } from 'react-router-dom';

// project import
import UsersRoutes from "../project/pages/users/users-routes";
import ProductRoutes from "../project/pages/products/products-routes";
import AuthenticationRoutes from "../project/pages/authentication/authentication-routes";
import DashboardRoutes from "../project/pages/dashboard/dashboard-routes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([DashboardRoutes, AuthenticationRoutes, UsersRoutes, ProductRoutes]);
}
