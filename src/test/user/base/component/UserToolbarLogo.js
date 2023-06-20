import {Button, Stack, Typography, useTheme} from "@mui/material";
import React from "react";
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';

function UserToolbarLogo(props) {
    const theme = useTheme();
    const styles = {
        title: {
            fontSize: "100%",
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            textTransform: 'none'
        },
        subtitle: {
            fontSize: theme.palette.text.secondary
        },
        avatar: {
            width: 26,
            height: 26,
            mr: "10px"
        }
    }
    return (
        <Button href={"/"}>
            <Stack direction="row">
                <Diversity2OutlinedIcon sx={{fontSize: "40px", pr: 1}}/>
                <Stack>
                    <Typography sx={styles.title}>TITLE</Typography>
                    <Typography sx={styles.subtitle}>description</Typography>
                </Stack>
            </Stack>
        </Button>
    )
}

export default UserToolbarLogo