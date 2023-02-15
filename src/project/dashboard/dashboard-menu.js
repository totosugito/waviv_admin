import DashboardIcon from '@mui/icons-material/Dashboard';
import {getRouterUrl} from "../../routes/router-url";

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const DashboardMenu = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: getRouterUrl("dashboard"),
            icon: DashboardIcon,
            breadcrumbs: false
        }
    ]
};

export default DashboardMenu;
