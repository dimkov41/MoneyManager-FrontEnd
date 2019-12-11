import { combineReducers } from 'redux';

const INITIAL_STATE = {
};

const RootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default combineReducers({
    root: RootReducer,
});
