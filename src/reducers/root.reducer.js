import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';

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
    auth: AuthReducer,
});
