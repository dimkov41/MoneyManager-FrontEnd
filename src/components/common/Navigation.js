import React from 'react'
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

const Navigation = () => {
  return (
        <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="*" component={Home} />
            </Switch>
          <Footer />
        </Router>
  )
}

export default Navigation