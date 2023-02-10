import {Link, useNavigate} from 'react-router-dom';
import {Alert, Box, Grid, Stack, Typography} from '@mui/material';

import FormLogin from '../components/form-login';
import {getRouterUrl} from "../../../../routes/routes";
import {style_auth} from '../styles/auth-style'
import MainCard from "../../../../base/components/MainCard";
import React, {useEffect} from 'react';
import {dispatch} from "../../../../store";
import {httpLogin, httpLogout} from "../../../../store/reducer/auth-reducer";
import {getApiUrl} from "../../../../services/apis";

const LoginPage = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [pageStatus, setPageStatus] = React.useState({error: false, msg: ""});

    useEffect(() => {
            dispatch(httpLogout());
        },        []
    )

    const onSubmitClicked = (data) => {
        let arg = {url: getApiUrl("login"), param: data}
        dispatch(httpLogin(arg))
            .unwrap()
            .then((e) => {
                navigate(getRouterUrl("register"));
                // window.location.reload();
                setPageStatus({error: false, msg: ""});
                setLoading(false);
            })
            .catch((e) => {
                setPageStatus({...pageStatus, error: e.id<0, msg: e.msg})
                setLoading(false);
            });
    }
    return (
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
                                {pageStatus.error && (
                                <Alert severity="error" sx={{mb: 2}}>{pageStatus.msg}</Alert>
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
