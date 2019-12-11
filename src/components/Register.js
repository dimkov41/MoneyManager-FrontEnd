import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            amount: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleSubmit(event) {

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div class="wrapper">
                <form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p>Personal info</p>
                    <label for="username">Username</label>
                    <input id="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" name="username" />

                    <label for="password">Password</label>
                    <input id="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password"/>

                    <label for="repeatPassword">Repeat Password</label>
                    <input id="repeatPassword" type="password" value={this.state.repeatPassword} onChange={this.handleChange} placeholder="RepeatPassword" name="repeatPassword"/>
                    <hr />
                    <p>Account</p>
                    <label for="usernmae">Amount</label>
                    <input id="amount" type="text" value={this.state.amount} onChange={this.handleChange} placeholder="amount" name="amount"/>

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;