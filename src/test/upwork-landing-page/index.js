import {useEffect} from "react";
import StartingView from "./component/starting-view";
import {Container} from "@mui/material";
import IntroView from "./component/intro-view";
import HorNavBar from "./component/hor-nav-bar";
import TalentCategory from "./component/talent-category";
import CustomNavBar from "./component/custom-nav-bar";
import {getRouterUrl} from "../../routes/router-url";

const UpworkLandingPage = () => {
    useEffect(() => {
        document.title = "Landing page"
    }, []);

    const headerItems = [
        {variant: "text", text: 'Log In', route: getRouterUrl("login")},
        {variant: "contained", text: 'Sign Up', route: getRouterUrl("register")},
    ];
    return (
        <>
            <CustomNavBar items={headerItems}/>
            <HorNavBar/>
            <Container>
                <StartingView/>
                <div style={{height: '25px'}}/>
                <IntroView/>
                <div style={{height: '30px'}}/>
                <TalentCategory/>
                <div style={{height: '30px'}}/>
            </Container>
        </>
    )
}
export default UpworkLandingPage;