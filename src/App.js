// project import
import Routes from 'mantis/routes';
import ThemeCustomization from 'mantis/themes';
import ScrollTop from 'mantis/components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
