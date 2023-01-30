import { lazy } from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MainLayout from "../../../base/main-layout";

// render - login
const UserList = Loadable(lazy(() => import('./pages/UserList')));

// ==============================|| AUTH ROUTING ||============================== //

const UsersRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'users-list',
            element: <UserList />
        },
        {
            path: 'users-role',
            element: <UserList />
        },
        {
            path: 'users-edit',
            element: <UserList />
        },
        {
            path: 'users-editXX',
            element: <UserList />
        }
    ]
};

export default UsersRoutes;