import { lazy } from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MainLayout from "../../base/main-layout";
import ProtectedRoute from "../../routes/protected-route";
import {getRouterUrl} from "../../routes/router-url";

// render - login
const ProductList = Loadable(lazy(() => import('./product-list')));

// ==============================|| AUTH ROUTING ||============================== //

const ProductRoute = {
    path: '/',
    element: <ProtectedRoute><MainLayout/></ProtectedRoute>,
    children: [
        {
            path: getRouterUrl("product-list"),
            element: <ProductList />
        },
        {
            path: 'products-info',
            element: <ProductList />
        },
        {
            path: 'products-store',
            element: <ProductList />
        }
    ]
};

export default ProductRoute;