import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth.actions';

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
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <a id="home" className="left-floated" href="/">MoneyManager</a>
                        </li>
                    </ul>
                    {/* {{#if isLoggedIn}} */}
                    {/* <ul>
                    <li>
                        <a class="right-floated" href="/user/profile">Pesho</a>
                    </li>

                    <li>
                        <a class="right-floated" href="/user/logout">Logout</a>
                    </li>
                </ul> */}
                    {/* {{ else}} */}
                    <ul>
                        <li>
                            <a className="right-floated" href="login">Login</a>
                        </li>
                    </ul>
                    {/* {{/if}} */}
                </nav>
            </header>
        )
    }
}


export default connect(
    null,
    {
        logout
    },
)(Header);