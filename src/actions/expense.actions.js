import service from '../services/restApi.service';
import ExpensesTypes from '../actions/types/expenses.types';

export const setAllExpenses = (data) => ({ type: ExpensesTypes.ALL_EXPENSES, data });

export const createExpense = (merchant, total, description, token) => dispatch => {
    service.createExpense(merchant, total, description, token)
        .then((response) => {
            if (response.error != null) {
                document.getElementById("serverError").style.display = "block"
                document.getElementById("serverError").innerHTML = response.error
                return;
            }
            window.location = "/";
        }).catch((e) => {
            document.getElementById("serverError").style.display = "block"
        })
};

export const deleteExpense = (expenseId, token) => dispatch => {
    console.log("DELETE EXPENSE")
    service.deleteExpense(expenseId,token);
};

export const allExpenses = (token) => dispatch => {
    service.allExpenses(token)
    .then((response) => {
        dispatch(setAllExpenses(response.expenses));
    });
};