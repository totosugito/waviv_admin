import {useTheme} from "@mui/material/styles";
import {Divider, Link, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import UserToolbarLogo from "./UserToolbarLogo";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';

function UserDrawer() {
    const theme = useTheme()
    const styles = {
        title: {
            color: theme.palette.text.secondary,
            mt: "5px",
            ml: "10px",
        },
        menuText: {
            marginLeft: "8px",
            color: theme.palette.text.primary
        },
        iconMenu: {
            color: theme.palette.text.primary
        }
    }
    return (
        <div>
            <Toolbar><UserToolbarLogo/></Toolbar>
            <Divider/>
            <List>
                <ListItemText primary={"LIST"} sx={styles.title}/>
                <Link underline={'none'} href={"#"}>
                    <ListItem disablePadding>
                        <ListItemButton sx={styles.iconMenu}>
                            <Diversity2OutlinedIcon/>
                            <ListItemText sx={styles.menuText} primary={"MENU1"}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link underline={'none'} href={"#"}>
                    <ListItem disablePadding>
                        <ListItemButton sx={styles.iconMenu}>
                            <HubOutlinedIcon/>
                            <ListItemText sx={styles.menuText} primary={"MENU2"}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link underline={'none'} href={"#"}>
                    <ListItem disablePadding>
                        <ListItemButton sx={styles.iconMenu}>
                            <BubbleChartOutlinedIcon/>
                            <ListItemText sx={styles.menuText} primary={"MENU3"}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>

            <Divider/>
            <List>
                <ListItemText primary={"INFO"} sx={styles.title}/>
                <Link underline={'none'} href={"#"}>
                    <ListItem disablePadding>
                        <ListItemButton sx={styles.iconMenu}>
                            <ContactMailOutlinedIcon/>
                            <ListItemText sx={styles.menuText} primary={"Request"}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link underline={'none'} href={"#"}>
                    <ListItem disablePadding>
                        <ListItemButton sx={styles.iconMenu}>
                            <LiveHelpOutlinedIcon/>
                            <ListItemText sx={styles.menuText} primary={"FAQ"}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link underline={'none'} href={"#"}>
                    <ListItem disablePadding>
                        <ListItemButton sx={styles.iconMenu}>
                            <InfoOutlinedIcon/>
                            <ListItemText sx={styles.menuText} primary={"About Us"}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
}
export default UserDrawer
