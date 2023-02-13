import {useEffect, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

import * as Yup from 'yup';
import {strengthColor, strengthIndicator} from 'libs/utils/password-strength';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React from 'react';


const FormRegister = ({onSubmitClicked}) => {
    const [level, setLevel] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const [formDefaultValue, setFormDefaultValue] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const registerSchema = Yup.object().shape({
        firstname: Yup.string().max(255).required('First Name is required'),
        lastname: Yup.string().max(255).required('Last Name is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: formDefaultValue,
        resolver: yupResolver(registerSchema)
    });

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <>
            <form noValidate onSubmit={handleSubmit(onSubmitClicked)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel >First Name*</InputLabel>
                            <OutlinedInput
                                type="text"
                                placeholder="Enter firstname"
                                {...register("firstname")}
                                error={!!errors.firstname}
                            />
                            {errors.firstname && (
                                <FormHelperText error>
                                    {errors.firstname?.message}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel >Last Name*</InputLabel>
                            <OutlinedInput
                                type="text"
                                placeholder="Enter firstname"
                                {...register("lastname")}
                                error={!!errors.lastname}
                            />
                            {errors.lastname && (
                                <FormHelperText error>
                                    {errors.lastname?.message}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Email Address*</InputLabel>
                            <OutlinedInput
                                type="email"
                                placeholder="Enter email"
                                {...register("email")}
                                error={!!errors.lastname}
                            />
                            {errors.email && (
                                <FormHelperText error>
                                    {errors.email?.message}
                                </FormHelperText>
                            )}
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
                                onChange={(event => {
                                    changePassword(event.target.value);
                                })}
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
                            <FormControl fullWidth sx={{mt: 2}}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Box sx={{
                                            bgcolor: level?.color,
                                            width: 85,
                                            height: 8,
                                            borderRadius: '7px'
                                        }}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" fontSize="0.75rem">
                                            {level?.label}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            By Signing up, you agree to our &nbsp;
                            <Link variant="subtitle2" component={RouterLink} to="#">
                                Terms of Service
                            </Link>
                            &nbsp; and &nbsp;
                            <Link variant="subtitle2" component={RouterLink} to="#">
                                Privacy Policy
                            </Link>
                        </Typography>
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
    );
};

export default FormRegister;
