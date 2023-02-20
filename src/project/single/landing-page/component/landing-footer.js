
import React from 'react';
import {Box, Typography} from '@mui/material';

const LandingFooter = () => {
    const styles = {
        Container: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            justifyContent: 'center',
            backgroundColor: '#f2f0f1',
            flexDirection: 'column',
        },
        footerDate: {
            opacity: '0.7',
            fontSize: '90%'
        },
    }
    const date = new Date().getFullYear();
    return (
        <Box style={styles.Container}>
            <Typography style={styles.footerDate}>
                @{date} Waviv
            </Typography>
        </Box>
    );
};

export default LandingFooter;