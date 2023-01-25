// material-ui
import {Button, CardMedia, Link, Stack, Typography} from '@mui/material';

// project import
import MainCard from 'mantis/components/MainCard';

// assets
import avatar from 'mantis/assets/images/users/avatar-group.png';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
    <MainCard sx={{bgcolor: 'grey.50', m: 3}}>
        <Stack alignItems="center" spacing={2.5}>
            <CardMedia component="img" image={avatar} sx={{width: 112}}/>
            <Stack alignItems="center">
                <Typography variant="h5">Mantis Pro</Typography>
                <Typography variant="h6" color="secondary">
                    Checkout pro features
                </Typography>
            </Stack>
            <Button component={Link} target="_blank" href="https://mantisdashboard.io" variant="contained"
                    color="success" size="small">
                Pro
            </Button>
        </Stack>
    </MainCard>
);

export default NavCard;
