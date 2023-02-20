import {
    AppBar,
    Box, Button,
    Drawer,
    IconButton,
    List, ListItem, ListItemText,
    Toolbar,
    useMediaQuery,
    useScrollTrigger
} from "@mui/material";
import PropTypes from "prop-types";
import {Menu} from "@mui/icons-material";
import React from 'react';
import {useTheme} from "@mui/material/styles";
import LogoSection from "../../../../base/components/logo-section";

function ElevationScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function LandingHeaderItem(props) {
    return(
        <>
            <Button variant={props.item.variant} size={"small"} href={props.item.route}>{props.item.text}</Button>
        </>
    )
}

function LandingHeader(props) {
    const [state, setState] = React.useState({right: false});
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({...state, [anchor]: open});
    };
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = {
        toolBar: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px, 10px',
            backgroundColor: 'white',
        },
    }

    const list = (anchor) => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {props.items.map((item, idx) => (
                    <ListItem button key={idx}>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{marginBottom: '70px'}}>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar style={classes.toolBar}>
                        <LogoSection/>

                        {matches ? (
                            <Box>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    onClick={toggleDrawer('right', true)}>
                                    <Menu/>
                                </IconButton>

                                <Drawer
                                    anchor="right"
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}>
                                    {list('right')}
                                </Drawer>
                            </Box>
                        ) : <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexGrow: '0.02',
                            }}>
                            {props.items.map((item, idx) => (
                                <LandingHeaderItem key={idx} item={item}/>
                            ))}
                        </Box>}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Box>
    )
}

export default LandingHeader