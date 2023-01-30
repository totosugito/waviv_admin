import { lazy } from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('project/pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('project/pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        }
    ]
};

export default AuthenticationRoutes;
