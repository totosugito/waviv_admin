import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    Box,
    Button,
    Grid,
    Rating,
    Typography,
} from "@mui/material";
import {isMobileOnly, isTablet} from 'react-device-detect';

function ProductItem(props) {
    const styles = {
        GridItem: {
            m: 1,
        },
        Box: {
            minHeight: '220px',
            alignItems: 'center',
        },
        avatar: {
            marginRight: '10px',
            marginLeft: '10px',
        },
        desc: {
            fontSize: '14px',
            opacity: '0.6',
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        creator: {
            fontSize: 11,
            fontWeight: 'normal',
            opacity: 0.5
        },
        ratingText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#CC6600',
            mr: 1
        },
        ratingStar: {
            fontSize: 16,
            mr: 1
        },
        buttonBestSeller: {
            padding: 0,
            size: 'small',
            fontSize: 11,
            fontWeight: 'normal',
        }
    }

    return (
        <>
            <Grid item sm={12} md={4} sx={styles.GridItem}>
                <Box style={styles.Box}>
                    <img src={props.item.image_240x135} alt={""}/>
                    <Typography sx={styles.title}>
                        {props.item.title}
                    </Typography>
                    <Typography sx={styles.creator}>
                        {props.item.visible_instructors[0].title}
                    </Typography>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={styles.ratingText}>
                            {props.item.rating.toFixed(1)}
                        </Typography>
                        <Rating defaultValue={props.item.rating} precision={0.5} readOnly sx={styles.ratingStar}/>
                        <Typography sx={styles.creator}>
                            ({props.item.num_reviews})
                        </Typography>
                    </Box>
                    {props.item.bestseller_badge_content &&
                        <Button variant="contained" disableElevation sx={styles.buttonBestSeller}>
                            {props.item.bestseller_badge_content.badge_text}
                        </Button>
                    }
                </Box>
            </Grid>
        </>
    )
}

function CarouselProduct(props) {
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
                {props.data.unit.title}
            </Typography>
            <Typography sx={{p: 1}}>
                {props.data.unit.source_objects[0].description}
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
                {props.data.unit.items.map((item, idx) => {
                    return (<ProductItem key={idx} item={item}/>)
                })}
            </Carousel>
        </>
    )
}

export default CarouselProduct