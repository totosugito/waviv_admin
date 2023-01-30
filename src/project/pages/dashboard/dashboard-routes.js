import { lazy } from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MainLayout from 'base/main-layout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('./pages/dashboard-default')));

const DashboardRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
    ]
};

export default DashboardRoutes;
