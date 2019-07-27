import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// REDUX
    import thunk from 'redux-thunk'
    import logger from 'redux-logger'
    import { createStore, applyMiddleware } from 'redux'

// DEV TOOLS
    import { compose } from 'redux'

// REDUCERS 
    import { rootReducer } from './redux/reducers/index'

// COMPONENTS
    import App from './App';

// -- *** -- Start Code -- *** -- //
// -- *** -- Start Code -- *** -- //

// STORE ENHANCERS
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// CREATE STORE
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, logger))
    )

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);