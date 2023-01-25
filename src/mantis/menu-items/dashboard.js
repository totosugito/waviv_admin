import DashboardIcon from '@mui/icons-material/Dashboard';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: DashboardIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
