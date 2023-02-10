import React from 'react';
import {
    Button,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
} from '@mui/material';

import * as Yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const FormLogin = ({onSubmitClicked}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [formDefaultValue, setFormDefaultValue] = React.useState({
        username: "kminchelle",
        password: "0lelplR"
    });

    // Our Yup Schema for this form
    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .label('username')
            .max(128)
            .required("Username is required"),
        password: Yup.string()
            .label('password')
            .max(128)
            .required('Password is required')
            .default('123')
        ,
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: formDefaultValue,
        resolver: yupResolver(loginSchema)
    });

    return (
        <>
            <form noValidate onSubmit={handleSubmit(onSubmitClicked)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Username</InputLabel>
                            <OutlinedInput
                                type="text"
                                placeholder="Enter username"
                                {...register("username")}
                                error={!!errors.username}
                            />
                            {(errors.username && (
                                <FormHelperText error>
                                    {errors.username?.message}
                                </FormHelperText>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter password"
                                {...register("password")}
                                error={!!errors.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={()=> setShowPassword(!showPassword)}
                                            onMouseDown={(event) => event.preventDefault()}
                                            edge="end"
                                            size="large">
                                            {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                        </IconButton>
                                    </InputAdornment>
                                }/>
                            {errors.password && (
                                <FormHelperText error>
                                    {errors.password?.message}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disableElevation
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default FormLogin;
