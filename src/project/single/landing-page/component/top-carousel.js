import Carousel from 'react-material-ui-carousel'
import {Box, Card, CardContent, Typography, useMediaQuery} from "@mui/material";
import parse from 'html-react-parser';
import {useTheme} from "@mui/material/styles";

function CarouselItem(props) {
    const styles = {
        Image: {
            objectFit: "cover",
            width: "100%"
        },
        Card: {
            position: "absolute",
            top: "50px",
            left: "50px",
            maxWidth: "400px"
        }
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{position: "relative"}}>
                { !matches &&
                    <Card style={styles.Card}>
                        <CardContent>
                            <Typography variant="h3" component="div">
                                {props.item.title}
                            </Typography>
                            <Typography component="div">
                                {parse(props.item.desc)}
                            </Typography>
                        </CardContent>
                    </Card>
                }
                {props.item.url==="" ? <img src={props.item.image} style={styles.Image}/> : <a href={props.item.url}><img src={props.item.image} style={styles.Image}/></a>}
            </Box>
        </>
    )
}

function TopCarousel(props) {
    return (
        <>
            <Carousel indicators={true}>
                {
                    props.items.map((item, idx) => <CarouselItem key={idx} item={item}/>)
                }
            </Carousel>
        </>
    );
}

export default TopCarousel