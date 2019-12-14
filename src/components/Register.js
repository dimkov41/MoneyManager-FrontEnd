import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../resources/css/registerForm.css';
import { validateInputs, registerUser } from '../actions/auth.actions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            amount: ''
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("Component mount")
    }

    handleSubmit(event) {
        const { validateInputs, registerUser } = this.props;
        event.preventDefault();
        if (!validateInputs(this.state)) {
            return false;
        }

        const { username, password, confirm_password, amount } = this.state;
        registerUser(username, password, confirm_password, amount);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleBlur(event) {
        switch (event.target.name) {
            case "password":
                if (event.target.value.length <= 8) {
                    document.getElementById("errorPassword").style.display = "block"
                } else {
                    document.getElementById("errorPassword").style.display = "none"
                }
                break;
            case "confirm_password":
                if (event.target.value !== this.state.password) {
                    document.getElementById("errorConfirmPassword").style.display = "block"
                } else {
                    document.getElementById("errorConfirmPassword").style.display = "none"
                }
                break;
            case "amount":
                if (event.target.value <= 0) {
                    document.getElementById("errorAmount").style.display = "block"
                } else {
                    document.getElementById("errorAmount").style.display = "none"
                }
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
                        <h2>Sign Up</h2>
                        <p>
                            <label htmlFor="username" className="floatLabel">Username</label>
                            <input id="username" type="text" value={this.state.username} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Username" name="username" />
                        </p>
                        <p>
                            <label htmlFor="password" className="floatLabel">Password</label>
                            <input id="password" type="password" value={this.state.password} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Password" name="password" />
                            <span style={{ display: 'none' }} id="errorPassword">Enter a password longer than 8 characters</span>
                        </p>
                        <p>
                            <label htmlFor="confirm_password" className="floatLabel">Repeat Password</label>
                            <input id="confirm_password" type="password" value={this.state.repeatPassword} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Confirm password" name="confirm_password" />
                            <span style={{ display: 'none' }} id="errorConfirmPassword">Your passwords do not match</span>
                        </p>
                        <hr />
                        <p>
                            <label htmlFor="amount" className="floatLabel">Amount</label>
                            <input id="amount" type="number" value={this.state.amount} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="amount" name="amount" />
                            <span style={{ display: 'none' }} id="errorAmount">Amount should be positive number</span>
                        </p>
                        <p>
                            <input type='submit' value='Create My Account' id='submit' />
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
        validateInputs, registerUser
    },
)(Register);