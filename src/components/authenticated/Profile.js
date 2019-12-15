import React, { Component } from 'react';
import '../../resources/css/authForm.css';
import service from '../../services/restApi.service'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userAmount: 0,
            expenseTotalAmount: 0,
            merchesTotal: 0
        };
    }

    componentDidMount(){
        
        let token = window.localStorage.getItem("token");
        service.userProfile(token).then((response) =>{
            const user = response.user;
            const expenses = response.expenses;
            let expenseTotalAmount = 0;
            expenses.forEach(expense => expenseTotalAmount += expense.total);
            this.setState ({username: user.username, userAmount: user.amount, expenseTotalAmount, merchesTotal: expenses.length});
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="formWrapper">
                    <form action="/refill" method="GET">
                        <h2>Profile</h2>
                        <p>
                            <label htmlFor="username" className="floatLabel">Username</label>
                            <input disabled id="username" type="text" value={this.state.username} name="username" />
                        </p>
                        <p>
                            <label htmlFor="totalMerches" className="floatLabel">Total merches</label>
                            <input disabled id="totalMerches" type="text" value={this.state.merchesTotal}  name="totalMerches" />
                        </p>
                        <p>
                            <label htmlFor="expenseTotalAmount" className="floatLabel">Total expenses amount</label>
                            <input disabled id="expenseTotalAmount" type="text" value={this.state.expenseTotalAmount + " BGN"}  name="expenseTotalAmount" />
                        </p>
                        <p>
                            <label htmlFor="availableAmount" className="floatLabel">Available amount</label>
                            <input disabled id="availableAmount" type="text" value={(this.state.userAmount - this.state.expenseTotalAmount) + " BGN"}  name="availableAmount" />
                            {(this.state.userAmount - this.state.expenseTotalAmount) <= 0 ? <h2>You need more cash</h2> : null}
                        </p>
                        <p>
                            <input type='submit' value='Refill account' id='submit' />
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;