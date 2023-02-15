// project import
import Navigation from './Navigation';
import SimpleBar from 'base/components/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column'
            }
        }}
    >
        <Navigation />
    </SimpleBar>
);

export default DrawerContent;
