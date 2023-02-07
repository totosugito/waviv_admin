import auth from '../slices/auth-slice';
import message from '../slices/message-slice';
import menu from '../slices/menu-slice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = ({auth: auth, message: message, menu: menu});
export default reducers;
