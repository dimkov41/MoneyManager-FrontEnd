import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../resources/css/authForm.css';
import { createExpense } from '../../actions/expense.actions';

class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchant: '',
            total: 0,
            description: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { createExpense } = this.props;
        const { merchant, total, description } = this.state;
        if(total <= 0) {
            document.getElementById("errorTotal").style.display = "block";
        } else if(description.length > 50 || description.length < 10){
            document.getElementById("errorDescription").style.display = "block"
        } else {
            let token = window.localStorage.getItem('token');
            console.log(token);
            createExpense(merchant, total, description, token);
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleBlur(event) {
        switch (event.target.name) {
            case "total":
                if (+event.target.value <= 0) {
                    document.getElementById("errorTotal").style.display = "block"
                } else {
                    document.getElementById("errorTotal").style.display = "none"
                }
                break;
            case "description":
                if (event.target.value.length > 50 || event.target.value.length < 10) {
                    document.getElementById("errorDescription").style.display = "block"
                } else {
                    document.getElementById("errorDescription").style.display = "none"
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="formWrapper">
                    <form onSubmit={this.handleSubmit}>
                        <span style={{ display: 'none' }} id="serverError">Internal server error!</span>
                        <span style={{ display: 'none' }} id="emptyError">Please fill all fields.</span>
                        <h2>Create expense</h2>
                        <p>
                            <label htmlFor="username" className="floatLabel">Merchant</label>
                            <input id="username" type="text" value={this.state.merchant} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Merchant" name="merchant" />
                        </p>
                        <p>
                            <label htmlFor="total" className="floatLabel">Total</label>
                            <input id="total" type="number" value={this.state.total} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Total" name="total" />
                            <span style={{ display: 'none' }} id="errorTotal">You must provide positive number</span>
                        </p>
                        <p>
                            <label htmlFor="total" className="floatLabel">Description</label>
                            <input id="description" type="text" value={this.state.description} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Description" name="description" />
                            <span style={{ display: 'none' }} id="errorDescription">Description must be between 10 and 50 characters</span>
                        </p>
                        <p>
                            <input type='submit' value='Create' id='submit' />
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    {
        createExpense
    },
)(AddExpense);