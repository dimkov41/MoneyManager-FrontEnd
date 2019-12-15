import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expense.actions';

class DeleteExpense extends Component {
    constructor(props){
        super(props);
        
        const { deleteExpense } = this.props;
        const expenseId = this.props.match.params.id;
        const token = window.localStorage.getItem("token");
        deleteExpense(expenseId, token);
        window.location = "/";
    }

    render() {
        return null;
    }
}


export default connect(
    null,
    {
        deleteExpense
    },
)(DeleteExpense);