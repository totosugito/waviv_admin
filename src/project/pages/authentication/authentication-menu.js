// assets
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {getRouterUrl} from "../../../routes/router-url";

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const AuthenticationMenu = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'aa',
            title: 'Authentication',
            type: 'collapse',
            icon: HowToRegIcon,
            children: [
                {
                    id: 'bb',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    icon: HowToRegIcon,
                    target: true
                },
                {
                    id: 'cc',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    icon: HowToRegIcon,
                    target: true
                }
            ]
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: getRouterUrl("register"),
            icon: HowToRegIcon,
            target: true
        },
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: getRouterUrl("login"),
            icon: LockOpenIcon,
            target: true
        },
    ]
};

export default AuthenticationMenu;
