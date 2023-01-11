import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../store/actions/users";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        counter: 20,
        users: [],
        status: null,
        error: null,
    },
    reducers: {
        increment(state) {
            state.counter = state.counter + 10;
        },
        decrement(state) {
            state.counter = state.counter - 10;
        },
        addUser(state, action) {
            state.users.push(action.payload);
        },
        removeUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.users.push(...action.payload);
        },
    },
});

export default toolkitSlice.reducer;
export const { increment, decrement, addUser, removeUser } =
    toolkitSlice.actions;