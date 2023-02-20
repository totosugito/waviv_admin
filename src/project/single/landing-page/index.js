import {useEffect} from "react";
import {Container} from "@mui/material";
import TopCarousel from "./component/top-carousel";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import React from "react";
import Testimonial from "./component/testimonial";
import SectionItem from "./component/section-item";
import ImageInfo from "./component/image-info";
import LandingHeader from "./component/landing-header";
import {getRouterUrl} from "../../../routes/router-url";
import LandingFooter from "./component/landing-footer";

const LandingPage = () => {
    const headerItems = [
        {variant: "outlined", text: 'Login', route: getRouterUrl("login")},
        {variant: "contained", text: 'Sign Up', route: getRouterUrl("register")},
    ];
    const carouselItems = [
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
            icon: <EngineeringOutlinedIcon sx={{fontSize: 100}} color="primary"/>,
            sentence:
                'Solving world problems through various web applications using efficient programs and tools',
        },
        {
            icon: <AllInclusiveIcon sx={{fontSize: 100}} color="primary"/>,
            sentence:
                'Through team work, we collaborate and deliver quality projects of high standards',
        },
        {
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

    const testimonialItems = [
        {
            name: 'Karl Brighton',
            statement:
                'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
            image_url:
                'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
            position: 'Software Engineer at Kadex',
        },
        {
            name: 'Krishna Bells',
            statement:
                'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
            image_url:
                'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
            position: 'Product Manager at Google',
        },
        {
            name: 'Ben Spiff',
            statement:
                'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
            image_url:
                'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
            position: 'Founder of Crypto',
        },
    ];

    useEffect(() => {
        document.title = "Landing page"
    }, []);

    return (
        <>
            <Container>
                <LandingHeader items={headerItems}/>
                <TopCarousel items={carouselItems}/>
                <SectionItem items={sectionItems}/>
                <ImageInfo item={imageInfoItems[0]}/>
                <ImageInfo item={imageInfoItems[1]}/>
                <Testimonial items={testimonialItems}/>
            </Container>
            <LandingFooter/>
        </>
    );
}

export default LandingPage;
