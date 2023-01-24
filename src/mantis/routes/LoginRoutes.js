import { lazy } from 'react';

// project import
import Loadable from 'mantis/components/Loadable';
import MinimalLayout from 'mantis/layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('mantis/pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('mantis/pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
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

export default LoginRoutes;
