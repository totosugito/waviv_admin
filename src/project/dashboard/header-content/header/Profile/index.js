import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    ButtonBase, Card,
    CardContent,
    ClickAwayListener,
    Grid,
    IconButton,
    Paper,
    Popper,
    Stack,
    Tab,
    Tabs,
    Typography
} from '@mui/material';

import Transitions from 'base/components/@extended/Transitions';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {useSelector} from "react-redux";
import {getRouterUrl} from "../../../../../routes/router-url";
import {useNavigate} from "react-router-dom";
import {dispatch} from "../../../../../store";
import AuthService from "../../../../../services/auth-service";

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `profile-tab-${index}`,
        'aria-controls': `profile-tabpanel-${index}`
    };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
    let navigate = useNavigate();
    const auth = useSelector((state) => state.auth)
    const theme = useTheme();

    const handleLogout = () => {
        dispatch(AuthService.httpUserLogout());
        navigate(getRouterUrl("login"));
    };

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const iconBackColorOpen = 'grey.300';

    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <ButtonBase
                sx={{
                    p: 0.25,
                    bgcolor: open ? iconBackColorOpen : 'transparent',
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'secondary.lighter' }
                }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
                    <Avatar alt="profile user" src={auth.user.image} sx={{ width: 32, height: 32 }} />
                    <Typography variant="subtitle1">{auth.user.firstName}</Typography>
                </Stack>
            </ButtonBase>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 9]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="fade" in={open} {...TransitionProps}>
                        {open && (
                            <Paper
                                sx={{
                                    boxShadow: theme.customShadows.z1,
                                    width: 290,
                                    minWidth: 240,
                                    maxWidth: 290,
                                    [theme.breakpoints.down('md')]: {
                                        maxWidth: 250
                                    }
                                }}
                            >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <Card elevation={0}>
                                        <CardContent sx={{ px: 2.5, pt: 3 }}>
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Grid item>
                                                    <Stack direction="row" spacing={1.25} alignItems="center">
                                                        <Avatar alt="profile user" src={auth.user.image} sx={{ width: 32, height: 32 }} />
                                                        <Stack>
                                                            <Typography variant="h6">{auth.user.firstName} {auth.user.lastName}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {auth.user.email}
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton size="large" color="secondary" onClick={handleLogout}>
                                                        <LogoutOutlinedIcon />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        {open && (
                                            <>
                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                    <Tabs
                                                        variant="fullWidth"
                                                        value={value}
                                                        onChange={handleChange}
                                                        aria-label="profile tabs"
                                                    >
                                                        <Tab
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                textTransform: 'capitalize'
                                                            }}
                                                            icon={<PersonOutlineOutlinedIcon style={{ marginBottom: 0, marginRight: '10px' }} />}
                                                            label="Profile"
                                                            {...a11yProps(0)}
                                                        />
                                                        <Tab
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                textTransform: 'capitalize'
                                                            }}
                                                            icon={<SettingsOutlinedIcon style={{ marginBottom: 0, marginRight: '10px' }} />}
                                                            label="Setting"
                                                            {...a11yProps(1)}
                                                        />
                                                    </Tabs>
                                                </Box>
                                                <TabPanel value={value} index={0} dir={theme.direction}>
                                                    <ProfileTab handleLogout={handleLogout} />
                                                </TabPanel>
                                                <TabPanel value={value} index={1} dir={theme.direction}>
                                                    <SettingTab />
                                                </TabPanel>
                                            </>
                                        )}
                                    </Card>
                                </ClickAwayListener>
                            </Paper>
                        )}
                    </Transitions>
                )}
            </Popper>
        </Box>
    );
};

export default Profile;
