import expensesTypes from '../actions/types/expenses.types';

const INITIAL_STATE = {
    expenses: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case expensesTypes.ALL_EXPENSES:
            let data = action.data;
            return { ...state, expenses: data.expenses};
        default:
            return { ...state };
    }
};
