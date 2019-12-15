import service from '../services/restApi.service';

export const createExpense = (merchant, total, description, token) => dispatch => {
    service.createExpense(merchant, total, description, token)
        .then((response) => {
            console.log(response);
            if (response.error != null) {
                document.getElementById("serverError").style.display = "block"
                document.getElementById("serverError").innerHTML = response.error
                return;
            }
            window.location = "/";
        }).catch((e) => {
            console.log(e)
            document.getElementById("serverError").style.display = "block"
        })
};