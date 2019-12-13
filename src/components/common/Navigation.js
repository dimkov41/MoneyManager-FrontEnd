import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NotFoundRoute
} from "react-router-dom";
import ContextWrapper from './ContextWrapper';
import Home from '../Home';
import Header from './Header';
import Footer from './Footer';
import Register from '../Register';

const Navigation = () => {
  return (
      <ContextWrapper>
        <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={Register} />
              <Route path="*" component={Home} />
            </Switch>
          <Footer />
        </Router>
      </ContextWrapper>
  )
}

export default Navigation