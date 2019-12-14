import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, isAuthenticated } from '../../actions/auth.actions';

class Header extends Component {
    componentDidMount() {
        const { logout } = this.props;
        const token = window.localStorage.getItem('token');
        const username = window.localStorage.getItem('username');
        if (!token || !username) {
            logout();
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        let ul;
        if (isAuthenticated()) {
            let username = window.localStorage.getItem('username');
            ul = <ul>
                <li>
                    <a className="right-floated" href="/user/profile">Welcome, {username}</a>
                </li>

                <li>
                    <a className="right-floated" href="/logout">Logout</a>
                </li>
            </ul>;
        } else {
            ul = <ul>
                <li>
                    <a className="right-floated" href="login">Login</a>
                </li>
            </ul>;
        }
        
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <a id="home" className="left-floated" href="/">MoneyManager</a>
                        </li>
                    </ul>
                    {ul}
                </nav>
            </header>
        )
    }
}

export default connect(
    null,
    {
        logout, isAuthenticated
    },
)(Header);