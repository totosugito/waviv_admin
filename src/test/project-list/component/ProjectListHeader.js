import {Button, Grid, MenuItem, TextField} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useNavigate} from "react-router-dom";

function ProjectListHeader(props) {
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
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={7}>
                    <TextField label="Input" fullWidth size={'small'} label={'Find a project ...'}/>
                </Grid>
                <Grid item xs={5} alignItems={'right'} alignContent={'right'} textAlign={'right'} sx={{minWidth: '300px'}}>
                    <TextField
                        display={'inline'}
                        select
                        defaultValue="last_updated"
                        size={'small'}>
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" size={'small'} startIcon={<AddCircleOutlineIcon/>}
                            sx={{ml: 2, p: "5px"}} onClick={()=> navigate("/project-add")}>New</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default ProjectListHeader