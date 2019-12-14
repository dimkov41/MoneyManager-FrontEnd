const env = 'local';

const commonConfig = {
    registerUser: '/user/register',
    // authUri: '/auth',
    // verifySMSUri: '/users/verify/sms',
    // userStatus: '/users/status',
    // authRefresh: '/auth/refresh',
    // changePassword: '/users/change/pass'
};

const umConfig = {
    local: {
        url: 'http://localhost:3000',
    },
};

export default { ...umConfig[env], ...commonConfig };
