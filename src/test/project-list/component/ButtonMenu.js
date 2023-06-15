import {Button, ListItemIcon, Menu, MenuItem, Typography} from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import {useTheme} from "@mui/material/styles";

function ProjectSortMenu(props) {
    const theme = useTheme()
    const styles = {
        button: {
            minWidth: "120px",
            pt: "5px",
            pb: "5px",
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.secondary,
        },
    }

    const [checkedMenu, setCheckedMenu] = React.useState("");
    const [anchorMenu, setAnchorMenu] = React.useState(null);
    const openMenu = Boolean(anchorMenu);
    const handleSelectMenu = (v) => {
        setAnchorMenu(null)
        setCheckedMenu(v)
        props.onFilterSelected(v)
    }

    const handleCloseMenu = () => {
        setAnchorMenu(null);
    }

    const handleClickMenu = (event) => {
        setAnchorMenu(event.currentTarget);
    };

    return (
        <>
            <Button sx={styles.button} variant="outlined" onClick={handleClickMenu} size={'small'}
                    endIcon={<ExpandMoreIcon/>}>{props.title}</Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorMenu}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {props["menus"].map((menu, i) =>
                    <MenuItem key={menu["key"]} onClick={()=>handleSelectMenu(menu["key"])}>
                        <ListItemIcon>
                            {(checkedMenu === menu["key"]) &&
                                <CheckIcon fontSize="small"/>
                            }
                        </ListItemIcon>
                        <Typography>{menu["text"]}</Typography>
                    </MenuItem>
                )}
            </Menu>
        </>
    )
}

export default ProjectSortMenu