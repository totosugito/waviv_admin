import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isError: false,
    isLoggedIn: false,
    user: null,
    message: ""
};

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
export const {setAuthLoading, setAuthLoginSuccess, setAuthLoginFailed, setAuthLogout} = actions
export default reducer;