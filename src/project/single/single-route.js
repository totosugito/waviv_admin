import {lazy} from 'react';
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';
import {getRouterUrl} from "../../routes/router-url";

const Page404 = Loadable(lazy(() => import('./page/page_404')));
const LandingPage = Loadable(lazy(() => import('./landing-page')));

const SingleRoute = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: "*",
            element: <Page404/>
        },
        {
            path: getRouterUrl("404"),
            element: <Page404/>
        },
        {
            path: getRouterUrl("default"),
            element: <LandingPage />
        },
        {
            path: getRouterUrl("root"),
            element: <LandingPage />
        },
        {
            path: getRouterUrl("landing-page"),
            element: <LandingPage/>
        },
    ]
};

export default SingleRoute;
