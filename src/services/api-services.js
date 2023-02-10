import axios from "axios";
import {getRouterUrl} from "../routes/routes";
import {showLog} from "../libs/debug/log-message";
import {clearMessage} from "../store/slices/message-slice";
import {dispatch} from "../store";

// const API_URL = "https://dummyjson.com"
const API_URL = "http://117.54.250.85:5152"
const KEY_USER = "user"
const httpHeaderConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const userRegister = (url, param, key) => async (dispatch) => {
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

const login = (url, param) => {
    showLog("login", {url: url, param: param})
    return axios
        .post(API_URL + url, param, httpHeaderConfig)
        .then((response) => {
            // if (response.data.accessToken) {
            localStorage.setItem(KEY_USER, JSON.stringify(response.data));
            // }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem(KEY_USER);
    // dispatch(clearMessage());
    // dispatch({ type: USER_LOGOUT })
};

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

const ApiService = {
    login, logout
};

export default ApiService;