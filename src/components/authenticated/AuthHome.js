import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../resources/css/homeTable.css';
import service from '../../services/restApi.service';
import { allExpenses } from '../../actions/expense.actions';
import NoExpenses from './NoExpenses';
import Expenses from './Expenses';

class AuthHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: null
        };
    }

    componentDidMount() {
        let token = window.localStorage.getItem("token");
        service.allExpenses(token)
            .then((response) => {
                this.setState({ expenses: response.expenses });
            });
    }

    render() {
        return (
            <div className="wrapper">
                <h2>New expense coming up?</h2>
                <a href="/expense/add" className="button" style={{ fontSize: '1em', padding: '6px 5em', marginTop: '0', marginBottom: '2em' }}>Add now</a>
                {this.state.expenses && this.state.expenses.length > 0 ? <Expenses expenses={this.state.expenses} /> : <NoExpenses />}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { expenses: state.expenses.expenses }
}

export default connect(
    mapStateToProps,
    {
        allExpenses
    },
)(AuthHome);