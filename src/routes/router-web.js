import {useRoutes} from 'react-router-dom';

// project import
import UsersRoute from "../project/user/users-route";
import ProductRoute from "../project/product/product-route";
import AuthenticationRoute from "../project/authentication/authentication-route";
import DashboardRoute from "../project/dashboard/dashboard-route";
import SingleRoute from "../project/single/single-route";

export default function RouterWeb() {
    return useRoutes([
        SingleRoute,
        AuthenticationRoute,
        DashboardRoute,
        UsersRoute,
        ProductRoute,
    ]);
}
