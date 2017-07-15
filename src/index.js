/**
 * Created by dannyyassine on 2017-07-14.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './web/data/store'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { routes } from './web/routes';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './web/app';

let rootElement = document.getElementById('root');

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={App}/>
            </BrowserRouter>
        </Provider>,
        rootElement
    );
}

render();
