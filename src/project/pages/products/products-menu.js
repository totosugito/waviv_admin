import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const ProductsMenu = {
    id: 'menu-products',
    title: 'Products',
    type: 'group',
    children: [
        {
            id: 'products-list',
            title: 'Product List',
            type: 'item',
            url: '/products-list',
            icon: TextFieldsIcon
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

export default ProductsMenu;
