import {Link} from 'react-router-dom';
import {Grid, Stack, Typography} from '@mui/material';

import FormLogin from '../components/form-login';
import AuthWrapper from '../components/auth-wrapper';
import {getRouterUrl} from "../../../../routes/routes";

// ================================|| LOGIN ||================================ //

const LoginPage = () => (
    <AuthWrapper>
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
                <Typography variant="body1" sx={{textDecoration: 'none'}}>Need an account?&nbsp;
                    <Typography component={Link}
                                to={getRouterUrl("register")}
                                color="primary">
                        SIGN UP
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default LoginPage;
