import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/typography',
            icon: TextFieldsIcon
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/color',
            icon: FormatColorFillIcon
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/shadow',
            icon: BrandingWatermarkIcon
        },
    ]
};

export default utilities;
