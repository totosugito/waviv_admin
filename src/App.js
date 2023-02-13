import Routes from 'routes/router-web';
import ThemeCustomization from './base/themes';
import ScrollTop from './base/components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
