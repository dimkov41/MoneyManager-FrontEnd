import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/common/Navigation';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>, 
    document.getElementById('root'));