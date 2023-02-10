import {createSlice} from "@reduxjs/toolkit";
import {httpLogin, httpLogout} from "../reducer/auth-reducer";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // [register.fulfilled]: (state, action) => {
        //     state.isLoggedIn = false;
        // },
        // [register.rejected]: (state, action) => {
        //     state.isLoggedIn = false;
        // },
        [httpLogin.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [httpLogin.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [httpLogout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [httpLogout.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

const {reducer} = AuthSlice;
export default reducer;