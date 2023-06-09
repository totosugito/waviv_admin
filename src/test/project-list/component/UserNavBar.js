import React from 'react';
import {AppBar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {useNavigate} from "react-router-dom";

function UserNavBar(props) {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const open_admin_menu = () => {
        // navigate("/landing-admin")
    }
    const open_author_menu = () => {
        // navigate("/landing-author")
    }
    const open_learner_menu = () => {
        // navigate("/landing-learner")
    }
    const open_admin_integration_menu = () => {
        // navigate("/landing-admin-integration")
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <LocalLibraryIcon fontSize="small" />
                </ListItemIcon>
                Learner
            </MenuItem>
            <Divider/>
            <MenuItem onClick={open_admin_menu}>Administrator</MenuItem>
            <MenuItem onClick={open_author_menu}>Author</MenuItem>
            <MenuItem onClick={open_admin_integration_menu}>Integration Admin</MenuItem>
            <Divider/>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
        </Menu>
    );
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar>
                <Toolbar>
                    <Typography variant={'h4'}/>
                    <Box sx={{flexGrow: 1}}/>
                    <Box>
                        <IconButton size="large" color="inherit">
                            <MailIcon/>
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-controls={menuId}
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}

export default UserNavBar