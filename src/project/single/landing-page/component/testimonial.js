import {Avatar, Box, Card, CardContent, Grid, Typography} from "@mui/material";
function Testimonial(props) {
    const styles = {
        Box: {
            flexGrow: 1,
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'center',
        },
        Card: {
            backgroundColor: '#fff',
            padding: '5px',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
        },
        contents: {
            paddingBottom: '15px',
        },
        avatar: {
            marginRight: '10px',
        },
        desc: {
            fontSize: '14px',
            opacity: '0.6',
        },
    }

    return(
        <Box
            sx={styles.Box}>
            <Grid container spacing={2}>
                {props.items.map((item, idx) => (
                    <Grid item sm={12} md={4} key={idx}>
                        <Card style={styles.Card}>
                            <CardContent>
                                <Typography style={styles.contents}>
                                    "{item.statement}"
                                </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Avatar
                                        src={item.image_url}
                                        size="large"
                                        style={styles.avatar}
                                    />
                                    <Box>
                                        <Typography>{item.name}</Typography>
                                        <Typography style={styles.desc}>
                                            {item.position}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Testimonial