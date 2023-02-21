import {useEffect} from "react";
import {Container} from "@mui/material";
import React from "react";
import {getRouterUrl} from "../../../routes/router-url";
import SectionItem from "./component/section-item";
import ImageInfo from "./component/image-info";
import LandingHeader from "./component/landing-header";
import LandingFooter from "./component/landing-footer";
import CarouselHeader from "./component/carousel-header";
import CarouselTestimonial from "./component/carousel-testimonial";
import CarouselProduct from "./component/carousel-product";

import {udemyCourse} from "../../../test/data/udemy-course";
import {testimonialData} from "../../../test/data/testimoni-data";
import {landingCarouselImage} from "../../../test/data/landing-carousel-image";
import {landingSectionItem} from "../../../test/data/landing-section-item";
import {landingImageText} from "../../../test/data/landing-image-text";

const LandingPage = () => {
    const headerItems = [
        {variant: "outlined", text: 'Login', route: getRouterUrl("login")},
        {variant: "contained", text: 'Sign Up', route: getRouterUrl("register")},
    ];

    useEffect(() => {
        document.title = "Landing page"
    }, []);

    return (
        <>
            <Container>
                <LandingHeader items={headerItems}/>
                <CarouselHeader data={landingCarouselImage}/>
                <SectionItem data={landingSectionItem}/>
                <ImageInfo data={landingImageText.items[0]}/>
                <ImageInfo data={landingImageText.items[1]}/>
                <CarouselTestimonial data={testimonialData}/>
                <CarouselProduct data={udemyCourse}/>
            </Container>
            <LandingFooter/>
        </>
    );
}

export default LandingPage;
