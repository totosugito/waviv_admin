// material-ui
import { useTheme } from '@mui/material/styles';
import {webLogo} from "../../../config";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    return (
        <img src={webLogo} alt="Mantis" width="100"/>
    )
};

export default Logo;
