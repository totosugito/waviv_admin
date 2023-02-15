import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import {getRouterUrl} from "../../routes/router-url";
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const ProductMenu = {
    id: 'menu-products',
    title: 'Products',
    type: 'group',
    children: [
        {
            id: 'product-list',
            title: 'Product List',
            type: 'item',
            url: getRouterUrl("product-list"),
            icon: TextFieldsIcon,
            breadcrumbs: true,
            showTitle: false,
        },
        {
            id: 'products-info',
            title: 'Product Info',
            type: 'item',
            url: '/products-info',
            icon: FormatColorFillIcon
        },
        {
            id: 'products-store',
            title: 'Product Store',
            type: 'item',
            url: '/products-store',
            icon: BrandingWatermarkIcon,
        },
    ]
};

export default ProductMenu;
