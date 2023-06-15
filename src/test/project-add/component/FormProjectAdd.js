import {
    Box,
    Button, Container,
    Grid, InputAdornment,
    InputLabel,
    Stack, Tab, Tabs,
    TextField,
    Typography
} from "@mui/material";
import React from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import TabPanel from "./TabPanel";
import {useTheme} from "@mui/material/styles";

function FormProjectAdd(props) {
    const theme = useTheme()
    const styles = {
        title: {
            fontSize: '150%',
            fontWeight: 'bold',
            mb: 2
        }
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

                    <Container sx={{width: "100%"}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            variant="fullWidth"
                        >
                            <Tab label="Primary" sx={{
                                backgroundColor: theme.palette.warning.main,
                                borderRadius: "5px",
                                color: theme.palette.warning.contrastText
                            }}/>
                            <Tab label="Secondary" sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: "5px",
                                color: theme.palette.primary.contrastText
                            }}/>
                            <Tab label="Optional" sx={{
                                backgroundColor: theme.palette.error.main,
                                borderRadius: "5px",
                                color: theme.palette.error.contrastText
                            }}/>
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Container sx={{width: "100%", mt: 1}}>
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
                            </Container>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
                        </TabPanel>
                    </Container>
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