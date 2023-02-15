// assets
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {getRouterUrl} from "../../routes/router-url";

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const AuthenticationMenu = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'aa',
            title: 'Test Collapse',
            type: 'collapse',
            icon: HowToRegIcon,
            children: [
                {
                    id: 'cc',
                    title: 'Test Drawer Collapse1',
                    type: 'item',
                    url: getRouterUrl("register"),
                    icon: HowToRegIcon,
                    target: false
                },
                {
                    id: 'bb',
                    title: 'Test Drawer Collapse2',
                    type: 'item',
                    url: getRouterUrl("register"),
                    icon: HowToRegIcon,
                    target: false
                },
            ]
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: getRouterUrl("register"),
            icon: HowToRegIcon,
            target: false
        },
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: getRouterUrl("login"),
            icon: LockOpenIcon,
            target: false
        },
    ]
};

export default AuthenticationMenu;
