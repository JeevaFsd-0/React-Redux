import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";

const store = configureStore({
    reducer:{
        userInfo:userReducer,
    },
});

export default store;