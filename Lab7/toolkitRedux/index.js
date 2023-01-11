import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSlice from "./createSlice";

const rootReducer = combineReducers({
    toolkit: createSlice,
});

export const storeToolkit = configureStore({
    reducer: rootReducer,
});