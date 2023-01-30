import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const UsersMenu = {
    id: 'menu-users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'users-list',
            title: 'User List',
            type: 'item',
            url: '/users-list',
            icon: TextFieldsIcon
        },
        {
            id: 'users-role',
            title: 'Role',
            type: 'item',
            url: '/users-role',
            icon: FormatColorFillIcon
        },
        {
            id: 'users-edit',
            title: 'Edit User',
            type: 'item',
            url: '/users-edit',
            icon: BrandingWatermarkIcon,
        },
        {
            id: 'users-editXX',
            title: 'Edit UserXXXX',
            type: 'item',
            url: '/users-editXX',
            icon: BrandingWatermarkIcon,
        },
    ]
};

export default UsersMenu;
