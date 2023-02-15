import { lazy } from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MainLayout from "../../base/main-layout";
import MinimalLayout from "../../base/main-layout/MinimalLayout";

// render - login
const UserList = Loadable(lazy(() => import('./page/UserList')));

// ==============================|| AUTH ROUTING ||============================== //

const UsersRoute = {
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

export default UsersRoute;