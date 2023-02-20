import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box, Card, CardContent, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import parse from "html-react-parser";

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
            <Box sx={{position: "relative"}} style={{"height": "400px"}}>
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
                {props.item.url === "" ? <img src={props.item.image} style={styles.Image}/> :
                    <a href={props.item.url}><img src={props.item.image} style={styles.Image}/></a>}
            </Box>
        </>
    )
}

function CaroiselItems(props) {
    const styles = {
        Card: {
            backgroundColor: '#fff',
            padding: '5px',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
        },
    }
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const images = [
        "https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/bf1bd00b-e65c-4d18-8b3a-0176cfbb3601.jpg",
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];
    const texts = [
        "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
        "React Carousel with Server Side Rendering Support – Part 1",
        "React Carousel with Server Side Rendering Support – Part 2",
        "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"
    ];
    const fakerData = Array(12)
        .fill(0)
        .map((item, index) => {
            return {
                id: index,
                image: images[index],
                title: "w3js -> web front-end studio",
                desc: "w3js -> web front-end studio",
                description: texts[index] || texts[0]
            };
        });

    return (
        <>
            <Carousel style={{"height": "200px"}}
                      swipeable={false}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      autoPlay={false}
                      autoPlaySpeed={1000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px">
                {fakerData.slice(0, 5).map(card => {
                    // return <Image key={card.id} url={card.image} alt={card.headline} />;
                    return (<CarouselItem key={card.id} item={card}/>)
                })}
            </Carousel>
        </>
    )
}

export default CaroiselItems