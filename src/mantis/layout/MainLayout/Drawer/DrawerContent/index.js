// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'mantis/components/third-party/SimpleBar';

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
        <NavCard />
    </SimpleBar>
);

export default DrawerContent;
