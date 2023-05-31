import {useEffect} from "react";
import UserNavBar from "./component/user-nav-bar";
import {dispatch} from "../../store";
import {setLearnerUser} from "../../store/slices/user-slice";

const LandingLearner = () => {
    useEffect(() => {
        document.title = "Landing Admin"
        dispatch(setLearnerUser())
    }, []);

    return (
        <>
            <UserNavBar/>
        </>
    )
}
export default LandingLearner;