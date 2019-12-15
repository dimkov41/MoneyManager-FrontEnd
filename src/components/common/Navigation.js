import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Home';
import Header from './Header';
import Footer from './Footer';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CreateExpense from '../authenticated/CreateExpense';
import PrivateRoute from './PrivateRoute';
import DeleteExpense from '../authenticated/DeleteExpense';
import Profile from '../authenticated/Profile';
import Refill from '../authenticated/Refill';
import ExhangeRate from '../authenticated/ExchangeRate';
import { isAuthenticated } from '../../actions/auth.actions';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <PrivateRoute authed={this.props.isAuthenticated()} path="/refill" exact component={Refill} />
            <PrivateRoute authed={this.props.isAuthenticated()} path="/expenses/delete/:id" exact component={DeleteExpense} />
            <PrivateRoute authed={this.props.isAuthenticated()} path='/expense/add' component={CreateExpense} />
            <PrivateRoute authed={this.props.isAuthenticated()} path='/profile' component={Profile} />
            <PrivateRoute authed={this.props.isAuthenticated()} path="/exchangeRate" component={ExhangeRate} />
            <Route path="*" exact component={Home} />
          </Switch>
          <Footer />
      </Router>
    )
  }
}

export default connect(
  null,
  {
    isAuthenticated
  },
)(Navigation);