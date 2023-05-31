
import {createSlice} from "@reduxjs/toolkit";

const initialState = {userType: ""};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAdminUser: (state, action) => {
            state.userType = "Admin"
        },
        setAuthorUser: (state, action) => {
            state.userType = "Author"
        },
        setLearnerUser: (state, action) => {
            state.userType = "Learner"
        },
        setAdminIntegrationUser: (state, action) => {
            state.userType = "Admin Integration"
        },
    },
});

const {reducer, actions} = UserSlice;
export const {setAdminUser, setAuthorUser, setLearnerUser, setAdminIntegrationUser} = actions
export default reducer;