import {useEffect} from "react";
import UserNavBar from "./component/user-nav-bar";
import {dispatch} from "../../store";
import {setAuthorUser} from "../../store/slices/user-slice";

const LandingAuthor = () => {
    useEffect(() => {
        document.title = "Landing Author"
        dispatch(setAuthorUser())
    }, []);

    return (
        <>
            <UserNavBar/>
        </>
    )
}
export default LandingAuthor;