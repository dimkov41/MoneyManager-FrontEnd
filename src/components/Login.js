import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../resources/css/authForm.css';
import { loginUser, isAuthenticated } from '../actions/auth.actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const { isAuthenticated } = this.props;
        if(isAuthenticated()) {
            window.location = "/";
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { loginUser } = this.props;
        const { username, password } = this.state;
        loginUser(username, password);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="formWrapper">
                    <form onSubmit={this.handleSubmit}>
                        <span style={{ display: 'none' }} id="serverError">Internal server error!</span>
                        <span style={{ display: 'none' }} id="emptyError">Please fill all fields.</span>
                        <h2>Login</h2>
                        <p>
                            <label htmlFor="username" className="floatLabel">Username</label>
                            <input id="username" type="text" value={this.state.username} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Username" name="username" />
                        </p>
                        <p>
                            <label htmlFor="password" className="floatLabel">Password</label>
                            <input id="password" type="password" value={this.state.password} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Password" name="password" />
                        </p>
                        <p>
                            <input type='submit' value='Login' id='submit' />
                        </p>
                        <p style={{color: 'black', fontSize: '15px'}} >Don't have account? <a href="/register">Sign up</a></p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    };
};


export default connect(
    mapStateToProps,
    {
        loginUser, isAuthenticated
    },
)(Login);