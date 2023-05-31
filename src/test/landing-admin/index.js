import {useEffect} from "react";
import UserNavBar from "./component/user-nav-bar";
import {dispatch} from "../../store";
import {setAdminUser} from "../../store/slices/user-slice";

const LandingAdmin = () => {
    useEffect(() => {
        document.title = "Landing Admin"
        dispatch(setAdminUser())
    }, []);

    return (
        <>
            <UserNavBar/>
        </>
    )
}
export default LandingAdmin;