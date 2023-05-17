import {Button, Grid, Typography} from "@mui/material";
import StartingImage from "assets/upwork/starting-image.png";

function StartingView(props) {
    const styles = {
        big_title1: {
            fontSize: '50px',
            fontWeight: 'bold',
            color: 'green',
            position: "absolute",
        },
        big_title2: {
            fontSize: '50px',
            fontWeight: 'bold',
            color: 'green',
            paddingTop: '50px',
        },
        text_desc: {
            fontSize: '25px',
        },
        image: {
            objectFit: "cover",
            maxWidth: "350px",
            minWidth: "150px",
            height: "auto"
        },
        button: {
            marginTop: '20px',
            borderRadius: '20px'
        }

    }

    return (
        <>
            <Grid container>
                <Grid item xs={6} textAlign={'left'}>
                    <Typography style={styles.big_title1}>
                        How work
                    </Typography>
                    <Typography style={styles.big_title2}>
                        should work
                    </Typography>
                    <Typography style={styles.text_desc}>
                        Forget the old rules. You can have the best people.
                        Right now. Right here.
                    </Typography>
                    <Button variant="contained" color="success" style={styles.button}>Get started</Button>
                </Grid>
                <Grid item xs={6} textAlign={'right'}>
                    <img src={StartingImage} style={styles.image}/>
                </Grid>
            </Grid>
        </>
    )
}

export default StartingView