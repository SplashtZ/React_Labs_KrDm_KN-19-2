const defaultState = {
    counter: 20,
    lesson: {
        lection: 10,
        topic: "Redux Toolkit",
    },
};

const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";

export const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + Number(action.payload) };
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - Number(action.payload) };
        default:
            return state;
    }
};

export const increaseAction = (payload) => ({
    type: INCREASE_COUNTER,
    payload,
});
export const decreaseAction = (payload) => ({
    type: DECREASE_COUNTER,
    payload,
});