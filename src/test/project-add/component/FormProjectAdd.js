import {
    Button,
    Grid, InputAdornment,
    InputLabel,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

function FormProjectAdd(props) {
    const styles = {
        title: {
            fontSize: '150%',
            fontWeight: 'bold',
            mb: 2
        }
    }

    const onChange = (e) => {
        setFormValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const [formValue, setFormValue] = React.useState({
        name: '',
        desc: "",
        budget: "",
        startDate: null,
        finishDate: null,
    })
    const {name, desc, budget, startDate, finishDate} = formValue

    return (
        <>
            <Typography sx={styles.title}>Create a new project</Typography>

            <form onSubmit={() => props.onSubmitClicked(formValue)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Project Name*</InputLabel>
                            <TextField
                                required
                                type="text"
                                placeholder="Enter project name"
                                name='name'
                                value={name}
                                onChange={onChange}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Project Description</InputLabel>
                            <TextField
                                multiline
                                minRows={4}
                                type="text"
                                placeholder="Enter project description"
                                name='desc'
                                value={desc}
                                onChange={onChange}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Budget*</InputLabel>
                            <TextField
                                required
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                }}
                                placeholder="Enter project budget"
                                name='budget'
                                value={budget}
                                onChange={onChange}
                            />
                        </Stack>
                    </Grid>
                    <Grid item container>
                        <Grid sx={{width: "200px", mr: 1}}>
                            <Stack spacing={1}>
                                <InputLabel>Start Date*</InputLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        required
                                        value={startDate}
                                        onChange={(newValue) => setFormValue({
                                            ...formValue,
                                            startDate: newValue
                                        })}
                                    />
                                </LocalizationProvider>
                            </Stack>
                        </Grid>
                        <Grid sx={{width: "200px"}}>
                            <Stack spacing={1}>
                                <InputLabel>Finish Date*</InputLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        required
                                        value={finishDate}
                                        onChange={(newValue) => setFormValue({
                                            ...formValue,
                                            finishDate: newValue
                                        })}
                                    />
                                </LocalizationProvider>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disableElevation
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary">
                            Create Project
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default FormProjectAdd