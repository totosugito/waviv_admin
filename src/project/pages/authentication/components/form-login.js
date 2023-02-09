import React, {useEffect} from 'react';
import {
    Button,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack, TextField,
} from '@mui/material';

import * as Yup from 'yup';
import {Formik} from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {clearMessage} from "../../../../store/slices/message-slice";
import {getRouterUrl} from "../../../../routes/routes";
import {httpLogin, httpLogout} from "../../../../store/reducer/auth-reducer";
import {getApiUrl} from "../../../../services/apis";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const FormLogin = () => {
    const phone = {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
    };

    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const {message} = useSelector((state) => state.message);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [submitMessage, setSubmitMessage] = React.useState("");
    const [updateEffect, setUpdateEffect] = React.useState(false);
    const [formDefaultValue, setFormDefaultValue] = React.useState({
        username: phone.title,
        password: "123"
    });

    // Our Yup Schema for this form
    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .label('username')
            .min(2)
            .max(128)
            .required("Username is required"),
        password: Yup.string()
            .label('password')
            .max(128)
            .required('Password is required')
            .default('123')
        ,
    });
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: formDefaultValue,
        mode: "onTouched",
        resolver: yupResolver(loginSchema)
    });

    useEffect(() => {
        if (updateEffect) {
            console.log("before ---------- ")
            console.log(JSON.stringify(formDefaultValue));
            let defaultValues = {};
            defaultValues.username = "Kristof";
            defaultValues.password = "Rado";

            setFormDefaultValue((prevState) => ({
                ...prevState,
                username: defaultValues.username,
                password: defaultValues.password
            }))
            reset({...defaultValues});
            console.log("after ---------- ")
            console.log(JSON.stringify(formDefaultValue));
        }
    }, [updateEffect])

    const onSubmit = (data, e) => {
        let arg = {url: getApiUrl("login"), param: data}
        dispatch(httpLogin(arg))
            .unwrap()
            .then((e) => {
                // setStatus({success: false});
                // setSubmitting(false);
                // navigate(getRouterUrl("dashboard"));
                // window.location.reload();
            })
            .catch((e) => {
                // setStatus({success: false});
                // setErrors({submit: e.message});
                // setSubmitting(false);
                // setLoading(false);
                setSubmitMessage(e.message);
            });
    }
    const onError = (errors, e) => console.log(errors, e);

    useEffect(() => {
        dispatch(clearMessage());
        dispatch(httpLogout());
    }, [dispatch]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const setButtonDefault = () => {
        setUpdateEffect(true)
        // console.log("before ---------- ")
        // console.log(JSON.stringify(formDefaultValue));
        // setFormDefaultValue((prevState) =>({...prevState,  username: "aaa", password: "bbbb"}))
        // console.log("after ---------- ")
        // console.log(JSON.stringify(formDefaultValue));
    }
    return (
        <>
            <Button variant="contained"
                    color="primary" onClick={setButtonDefault}>Set Default</Button>

            <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
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

                    {/*{errors.submit && (*/}
                    <Grid item xs={12}>
                        <FormHelperText error>
                            {/*{errors.submit} (<i>{message}</i>)*/}
                            {errors.root}
                            {submitMessage} (<i>{message}</i>)
                        </FormHelperText>
                    </Grid>
                    {/*)}*/}
                    <Grid item xs={12}>
                        <Button
                            disableElevation
                            // disabled={isSubmitting}
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <Formik
                initialValues={{
                    username: 'kminchelle',
                    password: '0lelplR',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().min(3).email().max(255).required('Username is required'),
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
                                        error={Boolean(touched.username && errors.username)}
                                    />
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
