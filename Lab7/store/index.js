import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);