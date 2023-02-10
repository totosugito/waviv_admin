import {createAsyncThunk} from "@reduxjs/toolkit";
import ApiService from "../../services/api-services";
import axios from "axios";
import {createMessageError} from "../../libs/utils/my_message";

const API_URL = "https://dummyjson.com"
const KEY_USER = "user"
const httpHeaderConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
}
export const httpLogin = createAsyncThunk(
    "auth/login",
    async (arg, thunkAPI) => {
        try {
            await axios
                .post(API_URL + arg.url, arg.param, httpHeaderConfig)
                .then((response) => {
                    // TODO : check success identified
                    let isSuccess = true;
                    if(isSuccess) {
                        localStorage.setItem(KEY_USER, JSON.stringify(response.data));
                        return { user: response.data };
                    }
                    else {
                        return thunkAPI.rejectWithValue(createMessageError(response.data.error));
                    }
                })
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
            return thunkAPI.rejectWithValue(createMessageError(message));
        }
    }
);

export const httpLogout = createAsyncThunk("auth/logout", async () => {
    await ApiService.logout();
});