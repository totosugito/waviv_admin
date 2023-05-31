import {lazy} from 'react';
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';
import {getRouterUrl} from "../routes/router-url";

const UiAvatar = Loadable(lazy(() => import('./ui-avatar')));
const UpworkLandingPage = Loadable(lazy(() => import('./upwork-landing-page')));
const LandingAdmin = Loadable(lazy(() => import('./landing-admin')));
const LandingAuthor = Loadable(lazy(() => import('./landing-author')));
const LandingLearner = Loadable(lazy(() => import('./landing-learner')));
const LandingAdminIntegration = Loadable(lazy(() => import('./landing-admin-integration')));

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
        {
            path: getRouterUrl("landing-admin", ""),
            element: <LandingAdmin/>
        },
        {
            path: getRouterUrl("landing-author", ""),
            element: <LandingAuthor/>
        },
        {
            path: getRouterUrl("landing-learner", ""),
            element: <LandingLearner/>
        },
        {
            path: getRouterUrl("landing-admin-integration", ""),
            element: <LandingAdminIntegration/>
        },
    ]
};

export default TestRoute;
