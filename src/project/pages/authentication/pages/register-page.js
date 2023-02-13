import {Link} from 'react-router-dom';
import {Alert, Box, Grid, LinearProgress, Stack, Typography} from '@mui/material';
import {style_auth} from '../styles/auth-style'

import MainCard from "../../../../base/components/MainCard";
import FormRegister from "../components/form-register";
import {getRouterUrl} from "../../../../routes/router-url";
import {dispatch} from "../../../../store";
import AuthService from "../../../../services/auth-service";
import {getRouterApi} from "../../../../routes/router-api";
import {useSelector} from "react-redux";
import React from "react";

const RegisterPage = () => {
    const auth = useSelector((state) => state.auth)

    const onSubmitClicked = (data) => {
        if (auth.isLoading) return;
        dispatch(AuthService.httpUserLogin(getRouterApi("register"), data));
        console.log(JSON.stringify(data))
    }

    return (
        <>
            {auth.isLoading &&
                <Box sx={{width: '100%'}}>
                    <LinearProgress/>
                </Box>
            }
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
                                        <Typography variant="h3">Sign up</Typography>
                                        <Typography component={Link} to={getRouterUrl("login")} variant="body1"
                                                    sx={{textDecoration: 'none'}}
                                                    color="primary">
                                            Already have an account?
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    {auth.isError && (
                                        <Alert severity="error" sx={{mb: 2}}>{auth.message}</Alert>
                                    )}

                                    <FormRegister onSubmitClicked={onSubmitClicked}/>
                                </Grid>
                            </Grid>

                        </MainCard>
                    </Grid>
                </Grid>
            </Box>
        </>);
};

export default RegisterPage;
