const defaultState = {
    users: [],
};

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const ADD_USERS = "ADD_USERS";

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        case ADD_USERS:
            return { ...state, users: [...state.users, ...action.payload] };
        default:
            return state;
    }
};

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload });
export const addUsersAction = (payload) => ({ type: ADD_USERS, payload });