import {Link} from 'react-router-dom';
import {Box, Grid, Stack, Typography} from '@mui/material';
import {style_auth} from '../styles/auth-style'

import MainCard from "../../../../base/components/MainCard";
import FormRegister from "../components/form-register";

const RegisterPage = () => (
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
                                <Typography component={Link} to="/login" variant="body1" sx={{textDecoration: 'none'}}
                                            color="primary">
                                    Already have an account?
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <FormRegister/>
                        </Grid>
                    </Grid>

                </MainCard>
            </Grid>
        </Grid>
    </Box>
);

export default RegisterPage;
