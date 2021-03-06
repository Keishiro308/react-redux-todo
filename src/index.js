import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';

import Add from './components/Add';
import Index from './components/Index';
import Show from './components/Show';
import thunk from 'redux-thunk';
import reducer from './reducers';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path="/task/new" component={Add} />
            <Route exact path="/task/:id" component={Show} />
            <Route exact path="/" component={Index} />
        </Switch>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
