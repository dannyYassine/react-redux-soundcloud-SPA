/**
 * Created by dannyyassine on 2017-07-14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './infrastructure/data/store/index';
import { AppRouter } from './presentation/routes/index';

let rootElement = document.getElementById('root');

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <AppRouter/>
        </Provider>,
        rootElement
    );
}

render();
