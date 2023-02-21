import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography, useMediaQuery} from "@mui/material";
import {isMobileOnly, isTablet} from 'react-device-detect';

function TestimonialItem(props) {
    const styles = {
        Card: {
            minHeight: '220px',
            alignItems: 'center',
        },
        GridItem: {
            m: 1,
        },
        avatar: {
            marginRight: '10px',
            marginLeft: '10px',
        },
        desc: {
            fontSize: '14px',
            opacity: '0.6',
        },
    }

    return (
        <>
            <Grid item sm={12} md={4} sx={styles.GridItem}>
                <Card style={styles.Card}>
                    <CardContent>
                        <Typography>
                            "{props.item.statement}"
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Avatar
                            src={props.item.image_url}
                            size="large"
                            style={styles.avatar}
                        />
                        <Box>
                            <Typography>{props.item.name}</Typography>
                            <Typography style={styles.desc}>
                                {props.item.position}
                            </Typography>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

function CarouselTestimonial(props) {
    const deviceType = isMobileOnly ? "mobile" : isTablet ? "tablet" : "desktop";
    const responsive = {
        desktop: {
            breakpoint: {min: 1024, max: 3000},
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {min: 464, max: 1024},
            items: 2,
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
            <Typography variant="h3" fontWeight={700} sx={{p: 1}}>
                {props.data.title}
            </Typography>

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                keyBoardControl={false}
                customTransition="all .5"
                deviceType={deviceType}>
                {props.data.items.map((item, idx) => {
                    return (<TestimonialItem key={idx} item={item}/>)
                })}
            </Carousel>
        </>
    )
}

export default CarouselTestimonial