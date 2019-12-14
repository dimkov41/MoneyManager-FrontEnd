import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated, logout } from '../actions/auth.actions';

class Logout extends Component {
    constructor(props) {
        super(props);
        const { isAuthenticated, logout } = this.props;
        if (isAuthenticated()) {
            logout();
        }
        window.location = "/";
    }

    render() {
        return null;
    }
}

export default connect(
    null,
    {
        isAuthenticated, logout
    },
)(Logout);