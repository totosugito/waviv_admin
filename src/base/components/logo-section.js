import config, {webLogo} from "../../config";
import {ButtonBase} from "@mui/material";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

const LogoSection = ({ sx, to }) => (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
        <img src={webLogo} alt="Mantis" width="100"/>
    </ButtonBase>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};
export default LogoSection;