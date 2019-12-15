import config from '../config/restApi.config';

const registerUser = async(username, password, repeatPassword, amount) => {
    const props = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'content-type',
        },
        body: JSON.stringify({
            username,
            password,
            repeatPassword,
            amount,
        }),
    };

    return await fetch(config.url + config.registerUser, props)
        .then(response => response.json());
};

const loginUser = async(username, password) => {
    const props = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'content-type',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    }

    return await fetch(config.url + config.loginUser, props)
    .then(response => response.json());
}

const createExpense = async(merchant, total, description, token) => {
    const props = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'content-type',
        },
        body: JSON.stringify({
            merchant, total, description, token
        }),
    }

    return await fetch(config.url + config.createExpense, props)
    .then(response => response.json());
}

export default {
    registerUser,
    loginUser,
    createExpense
}