import Carousel from 'react-material-ui-carousel'
import {Box, Card, CardContent, Typography} from "@mui/material";
import parse from 'html-react-parser';

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

    return (
        <>
            <Box sx={{position: "relative"}}>
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
                <img src={props.item.image} style={styles.Image}/>
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