import {Box, Button, Grid, Typography} from "@mui/material";
import Lottie from "lottie-react";
import StartingAnim from "assets/upwork/starting-anim.json";

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

function IntroView(props) {
    const styles = {
        big_title: {
            fontSize: '35px',
            fontWeight: 'bold',
        },
        text_title: {
            fontSize: '20px',
            marginLeft: '10px',
            fontWeight: 'bold',
        },
        text_desc: {
            marginLeft: '35px',
        },
        box: {
            backgroundColor: '#ECF7EB',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        },
        box_anim: {
            maxWidth: '300px',
        },
        button: {
            marginTop: '20px',
            borderRadius: '20px'
        },
        list_group: {
            marginTop: "10px"
        }
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Box sx={styles.box}>
                        <Box sx={styles.box_anim}>
                            <Lottie animationData={StartingAnim} loop={true}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} textAlign={'left'}>
                    <Typography style={styles.big_title}>
                        Up your work game, it’s free
                    </Typography>
                    <Box>
                        <div style={styles.list_group}>
                        <Box><DriveFileRenameOutlineOutlinedIcon/><Typography style={styles.text_title} display={'inline'}>No cost to
                            join</Typography></Box>
                        <Typography style={styles.text_desc}>Register and browse professionals, explore projects, or
                            even book a consultation.</Typography>
                        </div>
                        <div style={styles.list_group}>
                            <Box><SellOutlinedIcon/><Typography style={styles.text_title} display={'inline'}>Post a job and hire top talent</Typography></Box>
                            <Typography style={styles.text_desc}>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</Typography>
                        </div>
                        <div style={styles.list_group}>
                            <Box><EmojiEventsOutlinedIcon/><Typography style={styles.text_title} display={'inline'}>Work with the best—without breaking the bank</Typography></Box>
                            <Typography style={styles.text_desc}>Upwork makes it affordable to up your work and take advantage of low transaction rates.</Typography>
                        </div>
                    </Box>
                    <Button variant="contained" color="success" sx={styles.button} style={{'marginRight': '20px'}}>Sign
                        up for free</Button>
                    <Button variant="outlined" color="success" sx={styles.button}>Learn how to hire</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default IntroView