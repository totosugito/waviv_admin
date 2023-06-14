import axios from "axios";
import {
    setAuthLoading,
    setAuthLoginSuccess,
    setAuthLoginFailed,
    setAuthLogout,
    setAuthRegisterSuccess, setAuthRegisterFailed
} from "../store/slices/auth-slice";
import {API_SERVER_URL} from "../config";
import {defaultHttpHeaderConfig, PREF_USER} from "./constant";

export const httpUserRegister = (url, param) => async (dispatch) => {
    try {
        dispatch(setAuthLoading());
        await axios.post(API_SERVER_URL + url, param, defaultHttpHeaderConfig).then((response) => {
            dispatch(setAuthRegisterSuccess(response.data));
        })
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        dispatch(setAuthRegisterFailed(message));
    }
}

export const httpUserLogin = (url, param) => async (dispatch) => {
    try {
        dispatch(setAuthLoading());
        await axios.post(API_SERVER_URL + url, param, defaultHttpHeaderConfig).then((response) => {
            // TODO : check success identified
            let isSuccess = true;
            if (isSuccess) {
                dispatch(setAuthLoginSuccess(response.data));
                localStorage.setItem(PREF_USER, JSON.stringify(response.data));
            } else {
                dispatch(setAuthLoginFailed("error no user"));
            }
        })
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        dispatch(setAuthLoginFailed(message));
    }
}

export const httpUserLogout = () => async (dispatch) => {
    localStorage.removeItem(PREF_USER);
    dispatch(setAuthLogout());
}

const AuthService = {
    httpUserLogin, httpUserLogout
};

export default AuthService;