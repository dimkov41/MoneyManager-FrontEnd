import React, { Component } from 'react';
import '../../resources/css/authForm.css';
import service from '../../services/restApi.service'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (this.state.amount <= 0) {
            document.getElementById("amountError").style.display = "block"
            event.preventDefault();
            return false;
        } else {
            document.getElementById("amountError").style.display = "none"
            const token = window.localStorage.getItem("token");
            service.refill(token, this.state.amount);
        }
    }

    handleBlur(event) {
        switch (event.target.name) {
            case "amount":
                if (event.target.value <= 0) {
                    document.getElementById("amountError").style.display = "block"
                } else {
                    document.getElementById("amountError").style.display = "none"
                }
                break;
            default:
                break;
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <div className="wrapper">
                <div className="formWrapper">
                    <form onSubmit={this.handleSubmit} action='/profile' method='GET'>
                        <h2>Refill account</h2>
                        <h4>Put some money inside it</h4>
                        <p>
                            <label htmlFor="amount" className="floatLabel">Amount</label>
                            <input id="amount" type="number" value={this.state.amount} onChange={this.handleChange} onBlur={this.handleBlur} name="amount" />
                            <span style={{ display: 'none' }} id="amountError">Amount cannot be negative number!</span>
                        </p>
                        <p>
                            <input type='submit' value='Confirm' id='submit' />
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;