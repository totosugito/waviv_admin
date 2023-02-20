import React from 'react';
import {Grid, Typography, Box} from '@mui/material';

const SectionItem = (props) => {
    const styles = {
        Box: {
            mt: 2,
            flexGrow: 1,
        },
        GridContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        GridItem: {
            backgroundColor: '#f2f0f1',
            textAlign: 'center',
            padding: '30px',
            borderRadius: '10px',
            margin: '10px !important',
            minHeight: '250px'
        },
    }

    return (
        <Box sx={styles.Box}>
            <Grid container sx={styles.GridContainer}>
                {props.items.map((item) => (
                    <Grid
                        item
                        xs={6}
                        md={3}
                        key={item.id}
                        sx={styles.GridItem}>
                        {item.icon}
                        <Typography>{item.sentence}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SectionItem;