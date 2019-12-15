import React, { Component } from 'react';
import '../../resources/css/homeTable.css';

class AuthHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div className="wrapper">
                {/* <section class="actions">
                    <form action="/user/refill" method="post">
                        <h2>Salary time? Refill your account amount.</h2>
                        <input type="text" id="refill-amount" name="amount" />
                        <button type="submit">Refill</button>
                    </form>
                    <div>
                        <h2>New expense comming up?</h2>
                        <a href="/expense/create">Add it now</a>
                    </div>
                </section >

                <hr class="separator" />

                <h1 class="no-expenses">No expenses founded so far.. <span>GOOD JOB!</span></h1> */}
                <h2>New expense coming up?</h2>
                <a href="/expense/add" className="button" style={{fontSize: '1em', padding: '6px 5em', marginTop: '0', marginBottom: '2em'}}>Add now</a>
                <table class="blueTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Merchant</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>cell1_1</td>
                            <td>cell2_1</td>
                            <td>cell3_1</td>
                            <td>cell4_1</td>
                        </tr>
                        <tr>
                            <td>cell1_1</td>
                            <td>cell2_1</td>
                            <td>cell3_1</td>
                            <td>cell4_1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AuthHome;