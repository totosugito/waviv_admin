import { lazy } from 'react';

// project import
import Loadable from 'mantis/components/Loadable';
import MainLayout from 'mantis/layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('mantis/pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('mantis/pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('mantis/pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('mantis/pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('mantis/pages/components-overview/Shadow')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
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
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
    ]
};

export default MainRoutes;
