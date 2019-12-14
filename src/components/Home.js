import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        window.history.pushState({}, document.title, "/" + "");
    }

    render() {
        return (
            <div className="wrapper">
                <div className="homeHeader">
                    <h1>Start managing properly your money today!</h1>
                    <hr/>
                    <a href="/register" className="button">Sign Up</a>
                </div>
            </div>
        )
    }
}

export default Home;