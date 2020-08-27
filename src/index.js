import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { classReducer } from './reducers/index'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
// import 'normalize.css'

const middleware = [
    thunk, logger
]
const store = createStore(classReducer, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
