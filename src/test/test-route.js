import {lazy} from 'react';
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';
import {getRouterUrl} from "../routes/router-url";

const UiAvatar = Loadable(lazy(() => import('./ui-avatar')));
const UpworkLandingPage = Loadable(lazy(() => import('./upwork-landing-page')));

const TestRoute = {
    element: <MinimalLayout/>,
    children: [
        {
            path: getRouterUrl("ui-avatar", ""),
            element: <UiAvatar/>
        },
        {
            path: getRouterUrl("default", ""),
            element: <UpworkLandingPage />
        },
        {
            path: getRouterUrl("root", ""),
            element: <UpworkLandingPage />
        },
        {
            path: getRouterUrl("upwork-landing-page", ""),
            element: <UpworkLandingPage/>
        },
    ]
};

export default TestRoute;
