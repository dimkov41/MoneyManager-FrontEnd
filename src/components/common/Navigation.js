import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../reducers/root.reducer';
import Home from '../Home';
import Header from './Header';
import Footer from './Footer';
import Register from '../Register';
import Login from '../Login';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Navigation = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        </Switch>
        <Footer />
      </Provider>
    </Router>
  )
}

export default Navigation