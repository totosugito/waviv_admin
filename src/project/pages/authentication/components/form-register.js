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
    Typography, Alert
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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formDefaultValue, setFormDefaultValue] = React.useState({
        fullname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });
    const registerSchema = Yup.object().shape({
        fullname: Yup.string().max(255).required('First Name is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel >Full Name*</InputLabel>
                            <OutlinedInput
                                type="text"
                                placeholder="Enter fullname"
                                {...register("fullname")}
                                error={!!errors.fullname}
                            />
                            {errors.fullname && (
                                <FormHelperText error>
                                    {errors.fullname?.message}
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
                                error={!!errors.email}
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
                                <Typography variant="body" fontSize="0.75rem">
                                    Hint: To make password stronger, use upper and lower case letters, numbers, and symbols like ! ? $ % ^ & ).
                                </Typography>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm password"
                                {...register("passwordConfirmation")}
                                error={!!errors.passwordConfirmation}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={()=> setShowConfirmPassword(!showConfirmPassword)}
                                            onMouseDown={(event) => event.preventDefault()}
                                            edge="end"
                                            size="large">
                                            {showConfirmPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                        </IconButton>
                                    </InputAdornment>
                                }/>
                            {errors.passwordConfirmation && (
                                <FormHelperText error>
                                    {errors.passwordConfirmation?.message}
                                </FormHelperText>
                            )}
                        </Stack>
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
