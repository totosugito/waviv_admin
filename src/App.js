import ThemeCustomization from './base/themes';
import ScrollTop from './base/components/ScrollTop';
import RouterWeb from "routes/router-web";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <RouterWeb/>
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
