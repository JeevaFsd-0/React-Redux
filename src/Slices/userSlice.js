import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.users = [...state.users, action.payload];
        },
        removeUser:(state, action)=>{
            const newSetOfUsers = state.users.filter(
                (user) => user.id !== action.payload
            );
            state.users = newSetOfUsers;
        }
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;