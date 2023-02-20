import {useEffect} from "react";
import {Box, Button, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Hero from "./component/hero";
import SectionItem from "./component/section-item";
import ImageInfo from "./component/image-info";
import TopCarousel from "./component/top-carousel";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import React from "react";

const LandingPage = () => {
    const carouselItem = [
        {
            title: "Expand your career",
            desc: "How learners like you are achieving their goals",
            image: "https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/bf1bd00b-e65c-4d18-8b3a-0176cfbb3601.jpg",
            url: "",
        },
        {
            title: "A broad selection of courses",
            desc: "Choose from 213,000 online video courses with new additions published every month",
            image: "https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
            url: "",
        },
        {
            title: "Log in for savings",
            desc: "We have special savings for logged-in visitors through Feb 22. See how much you can save. <a href='https://www.w3schools.com'>Contoh Link</a>",
            image: "https://img-c.udemycdn.com/notices/home_banner/image_udlite/b2cf540a-0a68-49e0-9d29-ebdd3df23a6d.jpg",
            url: "",
        },
    ];

    const sectionItems = [
        {
            id: 1,
            icon: <EngineeringOutlinedIcon sx={{fontSize: 100}} color="primary"/>,
            sentence:
                'Solving world problems through various web applications using efficient programs and tools',
        },
        {
            id: 2,
            icon: <AllInclusiveIcon sx={{fontSize: 100}} color="primary"/>,
            sentence:
                'Through team work, we collaborate and deliver quality projects of high standards',
        },
        {
            id: 3,
            icon: <PaidOutlinedIcon sx={{fontSize: 100}} color="primary"/>,
            sentence: 'Flexible payment plan is applicable to all our services',
        },
    ];

    const imageInfoItems = [
        {
            image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "We build, We revive",
            desc: "Your business needs to be in safe hands at all times. We ensure you never run out of customers and not " +
                "run at loss. We are trusted by over 500+ companies to deliver quality marketing campaigns using Digital " +
                "marketing & Offline marketing channels.",
            leftImagePos: true
        },
        {
            image: "https://keepn.com/graphics/lpgraphics/landing_pages/free_online_calendar.png",
            title: "Easy to Use & Customize",
            desc: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper " +
                "customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
            leftImagePos: false
        }
    ];
    const StyledContent = styled('div')(({theme}) => ({
        maxWidth: 480,
        margin: 'auto',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(12, 0),
    }));

    useEffect(() => {
        document.title = "Landing page"
    }, []);

    return (
        <>
            <Container>
                <TopCarousel items={carouselItem}/>
                {/*<Hero/>*/}
                <SectionItem items={sectionItems}/>
                <ImageInfo item={imageInfoItems[0]}/>
                <ImageInfo item={imageInfoItems[1]}/>

                {/*<StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>*/}
                {/*    <Typography variant="h3" paragraph>*/}
                {/*        Landing page...*/}
                {/*    </Typography>*/}

                {/*<Typography sx={{ color: 'text.secondary' }}>*/}
                {/*    Sorry, we could’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your*/}
                {/*    spelling.*/}
                {/*</Typography>*/}

                {/*<Box*/}
                {/*    component="img"*/}
                {/*    src={Image404}*/}
                {/*    sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}*/}
                {/*/>*/}

                {/*<Button to={getRouterUrl("frontpage-user")} size="large" variant="contained" component={Link}>*/}
                {/*    Go to Home*/}
                {/*</Button>*/}
                {/*</StyledContent>*/}
            </Container>
        </>
    );
}

export default LandingPage;
