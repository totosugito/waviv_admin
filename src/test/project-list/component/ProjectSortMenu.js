import {Button, ListItemIcon, Menu, MenuItem, Typography} from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import {useTheme} from "@mui/material/styles";

function ProjectSortMenu(props) {
    const theme = useTheme()
    const styles = {
        button: {
            width: "100px",
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
                    endIcon={<ExpandMoreIcon/>}>Sort</Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorMenu}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>handleSelectMenu(props["filterKey"][0])}>
                    <ListItemIcon>
                        {(checkedMenu === props["filterKey"][0]) &&
                            <CheckIcon fontSize="small"/>
                        }
                    </ListItemIcon>
                    <Typography>Last updated</Typography>
                </MenuItem>
                <MenuItem onClick={()=>handleSelectMenu(props["filterKey"][1])}>
                    <ListItemIcon>
                        {(checkedMenu === props["filterKey"][1]) &&
                            <CheckIcon fontSize="small"/>
                        }
                    </ListItemIcon>
                    <Typography>Name</Typography>
                </MenuItem>
                <MenuItem onClick={()=>handleSelectMenu(props["filterKey"][2])}>
                    <ListItemIcon>
                        {(checkedMenu === props["filterKey"][2]) &&
                            <CheckIcon fontSize="small"/>
                        }
                    </ListItemIcon>
                    <Typography>Stars</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default ProjectSortMenu