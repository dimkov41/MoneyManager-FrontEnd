import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        window.history.pushState({}, document.title, "/" + "");
    }

    render() {
        return (
            <div class="wrapper">

            </div>
        )
    }
}

export default Register;