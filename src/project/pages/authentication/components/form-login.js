import React, {useEffect} from 'react';
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
import {Formik} from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {clearMessage} from "../../../../store/slices/message-slice";
import {getRouterUrl} from "../../../../routes/routes";
import {httpLogin} from "../../../../store/reducer/auth-reducer";
import {getApiUrl} from "../../../../services/apis";

const FormLogin = () => {
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    username: 'kminchelle',
                    password: '0lelplR',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().max(255).required('Username is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                    setLoading(true);
                    let arg = {url: getApiUrl("login"), param: {username: values.username, password: values.password}}
                    dispatch(httpLogin(arg))
                        .unwrap()
                        .then((e) => {
                                setStatus({success: false});
                                setSubmitting(false);
                            navigate(getRouterUrl("dashboard"));
                            window.location.reload();
                        })
                        .catch((e) => {
                            console.log("fail" + JSON.stringify(e))
                                console.log("masuk ke error")
                                setStatus({success: false});
                                setErrors({submit: e.message});
                                setSubmitting(false);
                            setLoading(false);
                        });
                }}>
                {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel>Username</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        value={values.username}
                                        name="username"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter username"
                                        error={Boolean(touched.username && errors.username)}/>
                                    {(touched.username && errors.username && (
                                        <FormHelperText error>
                                            {errors.username}
                                        </FormHelperText>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel>Password</InputLabel>
                                    <OutlinedInput
                                        error={Boolean(touched.password && errors.password)}
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large">
                                                    {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }/>
                                    {touched.password && errors.password && (
                                        <FormHelperText error>
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit} (<i>{message}</i>)</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FormLogin;
