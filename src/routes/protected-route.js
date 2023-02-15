import {Navigate, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";
import {getRouterUrl} from "./router-url";

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth)
    const location = useLocation();

    return (auth.isLoggedIn ? children : <Navigate to={getRouterUrl("landing-page")} replace state={{ path: location.pathname }} />);
}
export default ProtectedRoute