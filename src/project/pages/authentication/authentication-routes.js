import {lazy} from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';
import {getRouterUrl} from "../../../routes/routes";

const RegisterPage = Loadable(lazy(() => import('project/pages/authentication/pages/register-page')));
const LoginPage = Loadable(lazy(() => import('project/pages/authentication/pages/login-page')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: getRouterUrl(false, "register"),
            element: <RegisterPage/>
        },
        {
            path: getRouterUrl(false, "login"),
            element: <LoginPage/>
        },
    ]
};

export default AuthenticationRoutes;
