import axios from "axios";
import {getRouterUrl} from "../routes/routes";

export const logout = () => (dispatch) => {
    // localStorage.removeItem('userInfo')
    // localStorage.removeItem('cartItems')
    // localStorage.removeItem('shippingAddress')
    // localStorage.removeItem('paymentMethod')
    // dispatch({ type: USER_LOGOUT })
    // dispatch({ type: USER_DETAILS_RESET })
    // dispatch({ type: ORDER_LIST_MY_RESET })
    // dispatch({ type: USER_LIST_RESET })
    document.location.href = getRouterUrl(true, 'login')
}

export const httpRegister = (url, param, key) => async (dispatch) => {
    try {
        dispatch({
            type: key.request,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.post(
            url,
            param,
            config
        )

        dispatch({
            type: key.success,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: key.fail,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const httpLogin = (url, param, key) => async (dispatch) => {
    try {
        dispatch({
            type: key.request,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.post(
            url,
            param,
            config
        )

        dispatch({
            type: key.success,
            payload: data,
        })

        // TODO: save user info data
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: key.fail,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const httpGet = (url, param, key) => async (dispatch, getState) => {
    try {
        dispatch({
            type: key.request,
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.get(url, config)

        dispatch({
            type: key.success,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: key.fail,
            payload: message,
        })
    }
}

export const httpPost = (url, param, key) => async (dispatch, getState) => {
    try {
        dispatch({
            type: key.request,
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.post(url, param, config)

        dispatch({
            type: key.success,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: key.fail,
            payload: message,
        })
    }
}