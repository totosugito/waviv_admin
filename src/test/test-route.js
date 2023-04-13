import {lazy} from 'react';
import Loadable from 'base/components/Loadable';
import MinimalLayout from 'base/main-layout/MinimalLayout';
import {getRouterUrl} from "../routes/router-url";

const UiAvatar = Loadable(lazy(() => import('./ui-avatar')));

const TestRoute = {
    element: <MinimalLayout/>,
    children: [
        {
            path: getRouterUrl("ui-avatar", ""),
            element: <UiAvatar/>
        },
    ]
};

export default TestRoute;
