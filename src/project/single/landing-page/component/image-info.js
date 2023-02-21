import React from 'react';
import {Grid, Typography, Box} from '@mui/material';

function ItemImage(props) {
    const styles = {
        Image: {
            maxWidth: '100%',
            objectFit: "cover",
        },
    }
    return (
        <Grid item xs={12} md={6}>
            <img src={props.item.image} style={styles.Image}/>
        </Grid>
    )
}

function ItemText(props) {
    const styles = {
        Subtitle: {
            opacity: '0.7',
            paddingBottom: '30px',
            fontSize: '18px',
        },
    }
    return (
        <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={700} sx={styles.title}>
                {props.item.title}
            </Typography>
            <Typography sx={styles.Subtitle}>
                {props.item.desc}
            </Typography>
        </Grid>
    )
}

function ImageInfo(props) {
    const styles = {
        BoxParent: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '30px 0px 30px 0px',
        },
        gridContainer: {
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
        },
    }

    return (
        <>
            <Box sx={styles.BoxParent}>
                <Grid container spacing={8} sx={styles.gridContainer}>
                    {props.data.leftImagePos ?
                        <>
                            <ItemImage item={props.data}/>
                            <ItemText item={props.data}/>
                        </>
                        :
                        <>
                            <ItemText item={props.data}/>
                            <ItemImage item={props.data}/>
                        </>
                    }
                </Grid>
            </Box>
        </>
    );
};

export default ImageInfo;