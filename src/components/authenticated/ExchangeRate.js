import React, { Component } from 'react';
import '../../resources/css/homeTable.css';
import service from "../../services/echangeRate.service";

class ExhangeRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rates: {},
            base: "",
        }

        this.handleCLick = this.handleCLick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        service.getExRate("BGN").then(response => {
            this.setState({ base: "BGN", rates: response.rates });
        })
    }

    handleCLick(event) {
        service.getExRate(this.state.base).then(response => {
            this.setState({ base: this.state.base, rates: response.rates });
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        let listItems = [];
        if (this.state.rates) {
            let arr = [];
            Object.keys(this.state.rates).map(key => {
                arr.push({ 'key': key, 'value': this.state.rates[key] });
            })

            let i;
            for (i = 0; i < arr.length - 1; i += 2) {
                listItems.push(
                    <tr>
                        <td>{arr[i].key}</td>
                        <td>{arr[i].value}</td>
                        <td>{arr[i + 1].key}</td>
                        <td>{arr[i + 1].value}</td>
                    </tr>);
            }
        }
        return (
            <div className='wrapper'>
                <h2>Current exchange rate. Base currency: {this.state.base}</h2>
                <h3>You can change it:</h3>
                <input id="exhangeRateInput" type="text" value={this.state.base} onChange={this.handleChange} placeholder="Base" name="base" />
                <a href="#" onClick={this.handleCLick   } className="button" style={{ fontSize: '0.8em', padding: '6px 5em', marginTop: '1em', marginBottom: '1em' }}>Add now</a>
                <h3>Currency: </h3>
                <table class="blueTable">
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rates</th>
                            <th>Currency</th>
                            <th>Rates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExhangeRate;