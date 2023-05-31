import {useEffect} from "react";
import UserNavBar from "./component/user-nav-bar";
import {dispatch} from "../../store";
import {setAdminIntegrationUser} from "../../store/slices/user-slice";

const LandingAdminIntegration = () => {
    useEffect(() => {
        document.title = "Landing Admin"
        dispatch(setAdminIntegrationUser())
    }, []);

    return (
        <>
            <UserNavBar/>
        </>
    )
}
export default LandingAdminIntegration;