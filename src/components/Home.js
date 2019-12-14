import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../actions/auth.actions';
import AuthHome from './authenticated/AuthHome';
import GuestHome from './guest/GuestHome';

class Home extends Component {
    componentDidMount() {
        window.history.pushState({}, document.title, "/");
    }

    render() {
        let { isAuthenticated } = this.props;
        if(isAuthenticated()){
            return <AuthHome/>
        }
        return <GuestHome/>
    }
}

export default connect(
    null,
    {
        isAuthenticated
    },
)(Home);