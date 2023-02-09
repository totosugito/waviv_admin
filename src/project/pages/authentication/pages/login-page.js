import {Link} from 'react-router-dom';
import {Box, Grid, Stack, Typography} from '@mui/material';

import FormLogin from '../components/form-login';
import {getRouterUrl} from "../../../../routes/routes";
import {style_auth} from '../styles/auth-style'
import MainCard from "../../../../base/components/MainCard";

const LoginPage = () => (
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
                            <FormLogin/>
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
    </Box>
);

export default LoginPage;
