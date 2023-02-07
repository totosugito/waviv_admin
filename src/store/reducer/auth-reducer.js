import {createAsyncThunk} from "@reduxjs/toolkit";
import ApiService from "../../services/api-services";
import {setMessage} from "../slices/message-slice";

export const httpLogin = createAsyncThunk(
    "",
    async (arg, thunkAPI) => {
        try {
            const data = await ApiService.login(arg.url, arg.param);
            return { user: data };
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const httpLogout = createAsyncThunk("auth/logout", async () => {
    await ApiService.logout();
});