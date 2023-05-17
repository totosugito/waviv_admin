import {Box, Card, CardActionArea, CardContent, Grid, Link, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
function TalentCategory(props) {
    const styles = {
        big_title: {
            fontSize: '35px',
            fontWeight: 'bold',
        },
        text_desc: {
            fontSize: '18px',
        },
        text_item: {
            color: 'grey',
            fontSize: '18px',
            paddingLeft: '5px'
        },
        star: {
            fontSize: '15px',
            color: 'green'
        }
    }

    const create_card = (title, star, total) => {
        return (
            <>
                <Card sx={{height: '120px'}} style={{border: "none", boxShadow: "none"}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {title}
                            </Typography>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box alignContent={'center'} alignItems={'center'}>
                                    <StarIcon style={styles.star}/>
                                    <Typography display={'inline'} style={styles.text_item}>
                                        {star}
                                    </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={styles.text_item}>
                                        {total} skills
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </>
        )
    }
    return (
        <>
            <Box>
                <Typography style={styles.big_title}>
                    Browse talent by category
                </Typography>
                <Typography style={styles.text_desc}>Looking for work? <Link href='#'>Browse jobs</Link></Typography>
                <Grid container spacing={2} sx={{mt: 2}}>
                    <Grid item xs={4} md={3}>
                        {create_card("Development & IT", "4.56/5", 8374)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Design & Creative", "4.36/5", 9745)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Sales & Marketing", "4.31/5", 6734)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Writing & Translation", "4.89/5", 3452)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Admin & Customer Support", "4.12/5", 6743)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Finance & Accounting", "4.31/5", 1235)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Engineering & Architecture", "4.23/5", 3453)}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {create_card("Legal", "4.64/5", 234)}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default TalentCategory