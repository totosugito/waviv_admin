import { lazy } from 'react';

// project import
import Loadable from 'base/components/Loadable';
import MainLayout from "../../../base/main-layout";

// render - login
const ProductList = Loadable(lazy(() => import('./pages/product-list')));

// ==============================|| AUTH ROUTING ||============================== //

const ProductRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'products-list',
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

export default ProductRoutes;