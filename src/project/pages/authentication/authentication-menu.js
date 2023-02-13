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
