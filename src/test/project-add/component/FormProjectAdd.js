import {
    Button,
    FormHelperText,
    Grid, InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import * as Yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React from 'react';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import DateRange from "react-date-range/dist/components/DateRange";

function FormProjectAdd(props) {
    const styles = {
        title: {
            fontSize: '150%',
            fontWeight: 'bold',
            mb: 2
        }
    }
    const [dateRanges, setDateRanges] = React.useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection"
        }
    ]);

    const onUpdateDateRange = () => {
        setFormDefaultValue({...formDefaultValue, date: dateRanges})
    };

    const [formDefaultValue, setFormDefaultValue] = React.useState({
        name: '',
        desc: "",
        budget: 0,
        date: {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    })

    const handleSelect = (ranges) =>{
        setDateRanges(ranges["selection"])
        setFormDefaultValue({...formDefaultValue, date: ranges["selection"]})
    }

    const registerSchema = Yup.object().shape({
        name: Yup.string().max(255).required('Project name is required'),
        budget: Yup.number().positive().required('Budget is required')
    });
    const {control, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: formDefaultValue,
        resolver: yupResolver(registerSchema)
    });

    return (
        <>
            <Typography sx={styles.title}>Create a new project</Typography>

            <form noValidate onSubmit={handleSubmit(props.onSubmitClicked)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel >Project Name*</InputLabel>
                            <OutlinedInput
                                type="text"
                                placeholder="Enter project name"
                                {...register("name")}
                                error={!!errors.name}
                            />
                            {errors.name && (
                                <FormHelperText error>
                                    {errors.name?.message}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel >Project Description</InputLabel>
                            <TextField
                                multiline
                                minRows={4}
                                type="text"
                                placeholder="Enter project description"
                                {...register("desc")}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel >Budget*</InputLabel>
                            <TextField
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                }}
                                placeholder="Enter project budget"
                                {...register("budget")}
                                error={!!errors.budget}
                            />
                            {errors.budget && (
                                <FormHelperText error>
                                    {errors.budget?.message}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel >Select Date*</InputLabel>
                            <Controller
                                name="date-ranges"
                                control={control}
                                render={({ field }) => (
                            <DateRange
                                {...register("date")}
                                onChange={(item) => {
                                    handleSelect(item);
                                }}
                                moveRangeOnFirstSelection={false}
                                ranges={[formDefaultValue["date"]]}
                            />
                                )}/>
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disableElevation
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary">
                            Create Account
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default FormProjectAdd