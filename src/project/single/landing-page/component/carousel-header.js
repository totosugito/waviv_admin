import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box, Card, CardContent, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import parse from "html-react-parser";
import {isMobileOnly, isTablet} from 'react-device-detect';

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
                {!matches &&
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
                {props.item.url === "" ? <img src={props.item.image} style={styles.Image} alt={""}/> :
                    <a href={props.item.url}><img src={props.item.image} style={styles.Image} alt={""}/></a>}
            </Box>
        </>
    )
}

function CarouselHeader(props) {
    const deviceType = isMobileOnly ? "mobile" : isTablet ? "tablet" : "desktop";
    const responsive = {
        desktop: {
            breakpoint: {min: 1024, max: 3000},
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {min: 464, max: 1024},
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: {min: 0, max: 464},
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <>
            <Carousel
                      swipeable={false}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={5000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      deviceType={deviceType}>
                    {props.data.items.map((item, idx) => {return (<CarouselItem key={idx} item={item}/>)})}
            </Carousel>
        </>
    )
}

export default CarouselHeader