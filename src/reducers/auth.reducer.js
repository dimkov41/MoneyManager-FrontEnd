import authTypes from '../actions/types/auth.types';

const INITIAL_STATE = {
    loggedIn: false,
    token: null,
    username: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authTypes.SUCCESS_AUTH:
            let data = action.data;
            console.log(data)
            // return { ...state, loggedIn: true, token: data.token, username: data.username }
            return Object.assign({}, state, { loggedIn: true, token: data.token, username: data.username });
        case authTypes.LOGOUT:
            return { ...state, loggedIn: false, token: null, username: null }
        default:
            return { ...state };
    }
};
