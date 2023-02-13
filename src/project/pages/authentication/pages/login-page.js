import {Link, useNavigate} from 'react-router-dom';
import {Alert, Box, Grid, Stack, Typography} from '@mui/material';

import FormLogin from '../components/form-login';
import {getRouterUrl} from "../../../../routes/router-url";
import {style_auth} from '../styles/auth-style'
import MainCard from "../../../../base/components/MainCard";
import React, {useEffect} from 'react';
import {dispatch} from "../../../../store";
import AuthService from "../../../../services/auth-service";
import {getRouterApi} from "../../../../routes/router-api";
import {useSelector} from "react-redux";

const LoginPage = () => {
    let navigate = useNavigate();
    const auth = useSelector((state) => state.auth)
    useEffect(() => {
            dispatch(AuthService.httpUserLogout());
        }, []
    )

    useEffect(() => {
            if (auth.isLoggedIn) {
                navigate(getRouterUrl("dashboard"));
            }
        }, [auth.isLoggedIn]
    )

    const onSubmitClicked = (data) => {
        dispatch(AuthService.httpUserLogin(getRouterApi("login"), data));
    }
    return (
        // {auth.isLoading && }
        <Box sx={style_auth.box}>
            <Grid sx={style_auth.grid}>
                <Grid container sx={style_auth.grid_content}>

                    <MainCard sx={style_auth.main_card}
                              content={false}
                              border={false}
                              boxShadow>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="space-between" alignItems="baseline"
                                       sx={{mb: {xs: -0.5, sm: 0.5}}}>
                                    <Typography variant="h3">Login</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                {auth.isError && (
                                    <Alert severity="error" sx={{mb: 2}}>{auth.message}</Alert>
                                )}
                                <FormLogin onSubmitClicked={onSubmitClicked}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" sx={{textDecoration: 'none'}}>Need an
                                    account?&nbsp;
                                    <Typography component={Link}
                                                to={getRouterUrl("register")}
                                                color="primary">
                                        SIGN UP
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>

                    </MainCard>
                </Grid>
            </Grid>
        </Box>)
}

export default LoginPage;
