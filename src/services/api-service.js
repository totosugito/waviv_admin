import axios from "axios";

export const httpGet = async (url, config = {}) => {
    try {
        let response = await axios.get(url, config)
        return ({isError: false, data: response.data, message: ""});
    } catch (err) {
        const message =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        return ({isError: true, data: {}, message: message});
    }
}

export const httpPost = (url, param, key) => async (dispatch) => {
//     try {
//         dispatch({
//             type: key.request,
//         })
//
//         const {
//             userLogin: {userInfo},
//         } = getState()
//
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }
//
//         const {data} = await axios.post(url, param, config)
//
//         dispatch({
//             type: key.success,
//             payload: data,
//         })
//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message
//         if (message === 'Not authorized, token failed') {
//             dispatch(logout())
//         }
//         dispatch({
//             type: key.fail,
//             payload: message,
//         })
//     }
}

const ApiService = {
    httpGet, httpPost
};

export default ApiService;