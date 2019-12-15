import React, { Component } from 'react';
import '../../resources/css/homeTable.css';

function Expenses(props) {
    let listItems = null;
    let sum = 0;
    if (props.expenses) {
        listItems = props.expenses.map((expense) => {
            sum += expense.total;
            return (<tr>
                <td>{expense.date}</td>
                <td>{expense.merchant}</td>
                <td>{expense.total} BGN</td>
                <td>{expense.description}</td>
                <td><a className='button' href={'/expenses/delete/' + expense._id} style={{ padding: '0', margin: '0', paddingLeft: '1em', paddingRight: '1em' }}>Delete</a></td>
            </tr>);
        });

        console.log(listItems);
    }
    return (
        <table class="blueTable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Merchant</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>{sum} BGN</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Expenses;