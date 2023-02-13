import {createSlice} from "@reduxjs/toolkit";
import {PREF_USER} from "../../services/constant";

const user = JSON.parse(localStorage.getItem(PREF_USER));
const initialState = user
    ? {isLoggedIn: true, user, isLoading: false, isError: false, message: ""}
    : {isLoggedIn: false, user: null, isLoading: false, isError: false, message: ""};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthLoading: (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isLoggedIn = false;
            state.user = null;
            state.message = ""
        },
        setAuthRegisterSuccess: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isLoggedIn = false;
            state.user = null;
            state.message = ""
        },
        setAuthRegisterFailed: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isLoggedIn = false;
            state.user = null;
            state.message = action.payload
        },
        setAuthLoginSuccess: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.message = ""
        },
        setAuthLoginFailed: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isLoggedIn = false;
            state.user = null;
            state.message = action.payload
        },
        setAuthLogout: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isLoggedIn = false;
            state.user = null;
            state.message = ""
        }
    },
});

const {reducer, actions} = AuthSlice;
export const {
    setAuthLoading,
    setAuthRegisterSuccess,
    setAuthRegisterFailed,
    setAuthLoginSuccess,
    setAuthLoginFailed,
    setAuthLogout
} = actions
export default reducer;