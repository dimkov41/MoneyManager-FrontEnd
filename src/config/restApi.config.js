const env = 'local';

const commonConfig = {
    registerUser: '/user/register',
    loginUser: '/user/login',
    userProfile: '/user/profile',
    refill: '/user/refill',
    createExpense: '/expense/create',
    allExpenses: '/expense/all',
    deleteExpense: '/expense/delete',
};

const umConfig = {
    local: {
        url: 'http://localhost:3000',
    },
};

export default { ...umConfig[env], ...commonConfig };
