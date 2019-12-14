import service from '../services/restApi.service'
import AuthTypes from '../actions/types/auth.types';

export const setUserData = (data) => ({ type: AuthTypes.SUCCESS_AUTH, data });
export const clearUserData = () => ({ type: AuthTypes.LOGOUT });

export const registerUser = (username, password, repeatPassword, amount) => dispatch => {
    service.registerUser(username, password, repeatPassword, amount)
        .then((response) => {
            if (response.error != null) {
                document.getElementById("serverError").style.display = "block"
                document.getElementById("serverError").innerHTML = response.error
                return;
            }

            const token = response.token;
            authenticateUser(token, username);
            dispatch(setUserData({ token, username }));
            window.location = "/";
        }).catch(() => {
            document.getElementById("serverError").style.display = "block"
        })
};

export const loginUser = (username, password) => dispatch => {
    if (!username || !password) {
        document.getElementById("emptyError").style.display = "block"
        return;
    }
    service.loginUser(username, password)
        .then((response) => {
            if (response.error != null) {
                document.getElementById("serverError").style.display = "block"
                document.getElementById("serverError").innerHTML = response.error
                return;
            }

            const token = response.token;
            authenticateUser(token, username);
            dispatch(setUserData({ token, username }));
            window.location = "/";
        }).catch(() => {
            document.getElementById("serverError").style.display = "block"
        })
}

export const isAuthenticated = () => dispatch => {
    let token = window.localStorage.getItem('token');
    let username = window.localStorage.getItem('username');
    if(token && username) {
        return true;
    }
    return false;
}

export const logout = () => dispatch => {
    window.localStorage.clear();
    dispatch(clearUserData());
}

export const validateInputs = (state) => dispatch => {
    const { password, confirm_password, username, amount } = state;
    if (!password || !confirm_password || !username || !amount) {
        document.getElementById("emptyError").style.display = "block"
        return false;
    }
    if (password.length <= 8) {
        document.getElementById("errorPassword").style.display = "block"
        return false;
    } else {
        document.getElementById("errorPassword").style.display = "none"
    }
    if (confirm_password !== password) {
        document.getElementById("errorConfirmPassword").style.display = "block"
        return false;
    } else {
        document.getElementById("errorConfirmPassword").style.display = "none"
    }
    if (amount <= 0) {
        document.getElementById("errorAmount").style.display = "block"
        return false;
    } else {
        document.getElementById("errorAmount").style.display = "none"
    }
    return true;
}

function authenticateUser(token, username) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('username', username)
}