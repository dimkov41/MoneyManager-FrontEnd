import '../../resources/css/site.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a id="home" class="left-floated" href="/">MoneyGone</a>
                    </li>
                </ul>
                {/* {{#if isLoggedIn}} */}
            <ul>
                    <li>
                        <a class="right-floated" href="/user/profile">Pesho</a>
                    </li>

                    <li>
                        <a class="right-floated" href="/user/logout">Logout</a>
                    </li>
                </ul>
                {/* {{ else}} */}
                <ul>
                    <li>
                        <a class="right-floated" href="/user/login">Login</a>
                    </li>
                </ul>
                {/* {{/if}} */}
    </nav>
        </header>
    )
}

export default Header