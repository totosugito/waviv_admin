import React from 'react';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    useTheme,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import UserToolbarLogo from "./component/UserToolbarLogo";
import UserDrawer from "./component/UserDrawer";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const UserBase = ({children}) => {
    const theme = useTheme();

    const drawerWidth = 240;
    const styles = {
        parent: {
            backgroundColor: theme.palette.background.default,
            height: '100%',
            minHeight: "100vh"
        },
        appBar: {
            backgroundColor: theme.palette.background.default,
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            marginLeft: {sm: `${drawerWidth}px`},
        },
        drawer: {
            display: {xs: 'none', sm: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        },
        drawerMobile: {
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        },
        boxContent: {
            flexGrow: 1,
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            marginLeft: {sm: `${drawerWidth}px`}
        },
        content: {
            pt: 1,
            pl: 1,
            pr: 1,
        },
    }

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <Box sx={styles.parent}>
            <AppBar position="relative" sx={styles.appBar}>
                <Toolbar>
                    <Box sx={{mr: 2, display: {sm: 'none'}, alignContent: 'center', alignItems: 'center'}}>
                        <IconButton edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>
                        <UserToolbarLogo/>
                    </Box>

                    <Box sx={{flexGrow: 1}}/>
                    <Box>
                        <IconButton size="large">
                            <MailIcon/>
                        </IconButton>
                        <IconButton size="large">
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end">
                            <AccountCircle/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={styles.drawerMobile}>
                    <UserDrawer/>
                </Drawer>
                <Drawer variant="permanent" open sx={styles.drawer}>
                    <UserDrawer/>
                </Drawer>
            </Box>

            <Box sx={styles.boxContent}>
                <Box sx={styles.content}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default UserBase