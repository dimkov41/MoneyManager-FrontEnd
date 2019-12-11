import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/common/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/root.reducer';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>, 
    document.getElementById('root'));