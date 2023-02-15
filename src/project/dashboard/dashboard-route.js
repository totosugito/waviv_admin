import {lazy} from 'react';

import Loadable from 'base/components/Loadable';
import MainLayout from 'base/main-layout';
import {getRouterUrl} from "../../routes/router-url";
import ProtectedRoute from "../../routes/protected-route";

const DashboardDefault = Loadable(lazy(() => import('./page/dashboard')));

const DashboardRoute = {
    path: '/',
    element: <ProtectedRoute><MainLayout/></ProtectedRoute>,
    children: [
        {
            path: getRouterUrl("dashboard"),
            element: <DashboardDefault/>
        }
    ]
};

export default DashboardRoute;
