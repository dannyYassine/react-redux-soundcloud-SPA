/**
 * Created by dannyyassine on 2017-07-14.
 */

import { createStore, applyMiddleware } from 'redux';
import rootReducer  from '../reducers/index';
import thunk from 'redux-thunk';

export { initialStore } from './initialStore';

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
