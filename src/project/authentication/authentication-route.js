import {lazy} from 'react';
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';
import {getRouterUrl} from "../../routes/router-url";

const RegisterPage = Loadable(lazy(() => import('project/authentication/page/register-page')));
const LoginPage = Loadable(lazy(() => import('project/authentication/page/login-page')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthenticationRoute = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: getRouterUrl("register"),
            element: <RegisterPage/>
        },
        {
            path: getRouterUrl("login"),
            element: <LoginPage/>
        },
    ]
};

export default AuthenticationRoute;
