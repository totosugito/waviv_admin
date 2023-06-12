import {Button, Grid, TextField} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useNavigate} from "react-router-dom";
import React from "react"
import ButtonMenuSort from "./ButtonMenuSort";

function ProjectListHeader(props) {
    const styles = {
        gridSearch: {
            width: "50%",
            minWidth: "30%",
            maxWidth: "100%"
        },
        textSearch: {
            width: "100%",
            marginRight: "10px",
        },
        buttonAdd: {
            width: "80px",
            marginLeft: "10px",
            pt: "6px",
            pb: "6px",
        }
    }
    const navigate = useNavigate()
    const currencies = [
        {
            value: 'last_updated',
            label: 'Last updated',
        },
        {
            value: 'name',
            label: 'name',
        },
        {
            value: 'budget',
            label: 'Budget',
        },
    ];

    return (
        <>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item sx={styles.gridSearch}>
                    <TextField fullWidth size={'small'} label={'Find a project ...'} sx={styles.textSearch}/>
                </Grid>
                <Grid item justifyContent={"right"} sx={{width: "200px", ml: 2}}>
                    <ButtonMenuSort/>
                    <Button sx={styles.buttonAdd} variant="contained" size={'small'} startIcon={<AddCircleOutlineIcon/>}
                            onClick={() => navigate("/project-add")}>New</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default ProjectListHeader